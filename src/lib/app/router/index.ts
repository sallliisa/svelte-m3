import { routes as userRoutes } from '@/lib/app/stores/routes';
import { get, writable } from 'svelte/store';
import { wrap } from 'svelte-spa-router/wrap';
import { push, pop, replace, location} from 'svelte-spa-router'
import { staticRoutes } from './routes/static';

if (!get(userRoutes).length) userRoutes.buildRoutes();
const appRoutes = [...get(userRoutes), ...staticRoutes.map(item => {return {...item, userData: {...item.userData, static: true}}}) ]

const modules = import.meta.glob('@/views/*/*/*.svelte')
const authorizedRoutes = appRoutes.reduce((acc: any, route: any) => {
  if (route.userData.static) {
    acc[route.path] = wrap({
      ...route, path: undefined
    })
  } else {
    acc[route.path] = wrap({
      asyncComponent: (() => modules[`/src/views/${route.userData.module}/${route.userData.name}/${route.userData.name}.svelte`]() as any),
      userData: route.userData
    }); 
  }
  return acc;
}, {});


const routerPush = (options: string | {name: string}) => {
  console.log('routerPush', Object.keys(authorizedRoutes).length, authorizedRoutes)
  if (Object.keys(authorizedRoutes).length === staticRoutes.length) userRoutes.buildRoutes()
  if (typeof options === 'string') {
    push(options)
  } else {
    const route = appRoutes.find(item => item.userData.name === options.name)
    if (route) push(route.path)
    else throw new Error(`On route navigation (push): Route ${options.name} not found`)
  }
  
}

export const routes = {...authorizedRoutes}
export const router = {push: routerPush, pop, replace}

function createRouteStore() {
  const route = writable(null)
  location.subscribe((v) => {
    route.set(authorizedRoutes[v])
  })
  return route
}
export const route = createRouteStore()
