<script lang="ts">
  import svelteLogo from './assets/svelte.svg'
  import viteLogo from '/vite.svg'
  import Counter from './lib/Counter.svelte'
  import Router from 'svelte-spa-router';
  import {wrap} from 'svelte-spa-router/wrap'
  import Authenticated from './templates/Authenticated.svelte';
  import { routes } from './lib/app/stores/routes';
  import {  } from 'svelte';
  import RailItem from './lib/components/navigation/Rail/layouts/RailItem.svelte';

  const modules = import.meta.glob('./views/*/*/*.svelte')
  const appRoutes = $routes.reduce((acc, route) => {
    console.log(`in ${route.userData.name}`, modules[`./views/${route.userData.module}/${route.userData.name}/${route.userData.name}.svelte`])
    acc[route.path] = wrap({
      asyncComponent: () => modules[`./views/${route.userData.module}/${route.userData.name}/${route.userData.name}.svelte`](),
      userData: route.userData
    });
    return acc;
  }, {});
</script>

<main>
  <Authenticated>
    <Router routes={appRoutes}/>
  </Authenticated>
</main>

<style>
</style>
