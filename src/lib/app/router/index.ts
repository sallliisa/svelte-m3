import { routes as userRoutes } from '@/lib/app/stores/routes';
import { get, writable } from 'svelte/store';
import { wrap } from 'svelte-spa-router/wrap';
import { push, pop, replace, location} from 'svelte-spa-router'
import { staticRoutes } from './routes/static';
import { beforeEach } from './config';

if (!get(userRoutes).length) userRoutes.buildRoutes()
const appRoutes = [
  ...get(userRoutes),
  ...staticRoutes.map((item) => {
    return { ...item, userData: { ...item.userData, static: true } }
  }),
]

const modules = import.meta.glob('@/views/*/*/*.svelte')
const authorizedRoutes = appRoutes.reduce((acc: any, route: any) => {
  if (route.userData.static) {
    acc[route.path] = wrap({
      ...route,
      path: undefined,
    })
  } else {
    acc[route.path] = wrap({
      asyncComponent: () => modules[`/src/views/${route.userData.module}/${route.userData.name}/${route.userData.name}.svelte`]() as any,
      userData: route.userData,
      conditions: beforeEach
    })
  }
  return acc
}, {})


const routerPush = (options: string | { name: string }) => {
  if (Object.keys(authorizedRoutes).length === staticRoutes.length) userRoutes.buildRoutes()
  if (typeof options === 'string') {
    push(options)
  } else {
    const route = appRoutes.find((item) => item.userData.name === options.name)
    if (route) push(route.path)
    else throw new Error(`On route navigation (push): Route ${options.name} not found`)
  }
}

function createRouteStore() {
  const route = writable(null)
  location.subscribe((v) => {
    route.update((state) => {
      return {
        ...state,
        ...authorizedRoutes[v],
      }
    })
  })
  return route
}

export const routes = authorizedRoutes
export const router = { push: routerPush, pop, replace }
export const route = createRouteStore()
