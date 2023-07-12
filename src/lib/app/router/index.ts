import { routes as userRoutes } from '@/lib/app/stores/routes';
import { get } from 'svelte/store';
import { wrap } from 'svelte-spa-router/wrap';
import { push, pop, replace, location} from 'svelte-spa-router'
import { staticRoutes } from './routes/static';

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


const routerPush = (name: string) => {
  if (appRoutes.length === staticRoutes.length) userRoutes.buildRoutes()
  console.log('on router push', appRoutes)
  const route = appRoutes.find((route: any) => route.userData.name === name)
  if (route) push(route.path)
  else throw new Error(`On route navigation (push): Route ${name} not found`)
}

const currentRoute = () => {
  if (appRoutes.length === staticRoutes.length) userRoutes.buildRoutes()
  console.log('on router read', appRoutes)
  const route = appRoutes.find((route: any) => route.path === get(location))
  if (route) return {path: route.path, ...route.userData}
  else throw new Error(`On getting current route: Route ${get(location)} not found`)
}

export const routes = {...authorizedRoutes}
export const router = {push: routerPush, pop, replace, currentRoute}
