import {
  GCMEncryption,
  createEncryptionStorage,
  createLocalStorage,
  persist,
} from "@macfja/svelte-persistent-store";
import { hasPermission } from "@/lib/app/utils/common";
import { writable } from "svelte/store";
import menu from "@/lib/app/menu";

function createModuleStore() {
  const storage = createEncryptionStorage(
    createLocalStorage(),
    new GCMEncryption("5368566D597133743677397A24432646")
  );
  const store = persist(writable(menu), storage, "modules");

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
            .filter((route: any, index: number) => {
              if (route.separator) return (item.routes[index + 1] as any)?.name;
              else return true;
            }),
        };
      })
      .filter((item) => item.routes.length);
    store.set(authorizedModules);
  }

  return {
    ...store,
    buildModules,
  };
}

export const modules = createModuleStore();
