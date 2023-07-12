import {
  createLocalStorage,
  persist,
} from "@macfja/svelte-persistent-store";
import { writable, get } from "svelte/store";
import { modules } from "./modules";

function createRoutesStore() {
  const { subscribe, set, update } = persist(writable([]), createLocalStorage(), 'routes');

  function buildRoutes() {
    console.log('building routes')
    modules.buildModules()
    const authorizedRoutes = get<any>(modules)
      .reduce((acc: any, item: any) => {
        return [
          ...acc,
          ...item.routes.map((route: any) => {
            return {
              ...route,
              module: item.name,
            };
          }),
        ];
      }, [])
      .filter((route: any) => !route.separator)
      .map((route: any) => {
        return {
          path: `/${route.module}/${route.name}`,
          userData: {
            name: route.name,
            title: route.title,
            icon: route.icon,
            description: route.description,
            module: route.module,
          },
        };
      });
    set(authorizedRoutes);
  }

  return {
    subscribe,
    set,
    update,
    buildRoutes,
  };
}

export const routes = createRoutesStore();
