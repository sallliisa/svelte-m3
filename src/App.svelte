<script lang="ts">
  import Router from 'svelte-spa-router';
  import {routes} from '@/lib/app/router'
  import { colorPreference } from './lib/app/stores/colorpreference';
  import {location} from 'svelte-spa-router'
  import { fade } from './lib/app/motion/animate'
  import { motion } from './lib/app/motion'
  import Fade from './lib/components/motion/Fade.svelte'

  const layoutMap = {
    'DEFAULT': import('./layouts/Authenticated.svelte'),
    'unauthenticated': import('./layouts/Unauthenticated.svelte'),
    'design': import('./layouts/Design.svelte')
  }

  $: currentLocation = $location.split('/')[1]

  let router1
  let router2
</script>

<main id="main" class="{$colorPreference}">
  <div id="root">
    {#if layoutMap[currentLocation]}
      {#await layoutMap[currentLocation] then Layout}
        <svelte:component this="{Layout.default}">
          <Router wrapper={Fade} {routes}/>
        </svelte:component>
      {/await}
    {:else}
      {#await layoutMap["DEFAULT"] then Layout}
        <svelte:component this="{Layout.default}">
          <Router wrapper={Fade} {routes}/>
        </svelte:component>
      {/await}
    {/if}
  </div>
</main>

<style>
</style>
