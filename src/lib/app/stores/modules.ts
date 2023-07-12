import { createLocalStorage, persist, persistBrowserSession } from "@macfja/svelte-persistent-store"
import { hasPermission } from "@/lib/app/utils/common";
import { writable } from "svelte/store";
import menu from "@/lib/app/router/routes/menu";

function createModuleStore() {
  const {subscribe, set, update} = persist(writable(menu), createLocalStorage(), 'modules')

  function buildModules() {
    const authorizedModules = menu
      .map((item) => {
        return {
          ...item,
          routes: item.routes
            .filter((route: any) => {
              if (route.separator) return true;
              else return hasPermission(route.permission || route.name);
            })
        };
      }).map((item) => {
        return {
          ...item,
          routes: item.routes.filter((route: any, index: number) => {
            if (route.separator) return (item.routes[index + 1] as any)?.name;
            else return true;
          }),
        };
      })
      .filter((item) => item.routes.length);
    set(authorizedModules);
  }

  return {
    subscribe,
    set,
    update,
    buildModules,
  };
}

export const modules = createModuleStore();
