<script lang="ts">
  import Router from 'svelte-spa-router';
  import Authenticated from './layouts/Authenticated.svelte';
  import {routes} from '@/lib/app/router'
  import { colorPreference } from './lib/app/stores/colorpreference';
  import {location} from 'svelte-spa-router'

  const layoutMap = {
    'DEFAULT': import('./layouts/Authenticated.svelte'),
    'unauthenticated': import('./layouts/Unauthenticated.svelte'),
    'design': import('./layouts/Design.svelte')
  }

  $: currentLocation = $location.split('/')[1]
</script>

<main id="main" class="{$colorPreference}">
  <div id="root">
    {#if layoutMap[currentLocation]}
      {#await layoutMap[currentLocation] then Layout}
        <svelte:component this="{Layout.default}">
          <Router {routes}/>
        </svelte:component>
      {/await}
    {:else}
      {#await layoutMap["DEFAULT"] then Layout}
        <svelte:component this="{Layout.default}">
          <Router {routes}/>
        </svelte:component>
      {/await}
    {/if}
  </div>
</main>

<style>
</style>
