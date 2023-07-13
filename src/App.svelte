<script lang="ts">
  import Router from 'svelte-spa-router';
  import Authenticated from './layouts/Authenticated.svelte';
  import {routes} from '@/lib/app/router'
  import { colorPreference } from './lib/app/stores/colorpreference';
</script>

<main id="main" class="{$colorPreference}">
  <div id="root">
    <svelte:component this="{Authenticated}">
      <Router {routes}/>
    </svelte:component>
  </div>
</main>

<style>
</style>
