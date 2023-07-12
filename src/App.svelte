<script lang="ts">
  import Router from 'svelte-spa-router';
  import Authenticated from './layouts/Authenticated.svelte';
  import {routes} from '@/lib/app/router'
</script>

<main>
  <svelte:component this="{Authenticated}">
    <Router {routes}/>
  </svelte:component>
</main>

<style>
</style>
