import {
  GCMEncryption,
  createEncryptionStorage,
  createLocalStorage,
  persist,
} from "@macfja/svelte-persistent-store";
import { writable, get } from "svelte/store";
import { modules } from "./modules";

function createRoutesStore() {
  const storage = createEncryptionStorage(
    createLocalStorage(),
    new GCMEncryption("5368566D597133743677397A24432646")
  );
  const { subscribe, set, update } = persist(writable([]), storage, "routes");

  function buildRoutes() {
    modules.buildModules();
    const authorizedRoutes = (get(modules) as any)
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
