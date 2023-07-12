<script lang="ts">
  import Router from 'svelte-spa-router';
  import Authenticated from './layouts/Authenticated.svelte';
  import Unauthenticated from './layouts/Unauthenticated.svelte';
  import {routes, router} from '@/lib/app/router'
  import {location} from 'svelte-spa-router';
</script>

<main>
  <svelte:component this="{Authenticated}">
    <Router {routes}/>
  </svelte:component>
</main>

<style>
</style>
