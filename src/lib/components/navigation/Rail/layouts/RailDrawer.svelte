<script lang="ts">
  import { modules } from '@/lib/app/stores/modules';
  import Button from '@/lib/components/base/Button.svelte';
  import Icon from '@/lib/components/base/Icon.svelte';
  import {route, router} from '@/lib/app/router';
  import { sidebar } from '@/lib/app/stores/sidebar';
  import {get} from 'svelte/store';

  const appModules = get(modules) as any
</script>

<div class="z-10 overflow-hidden rounded-r-2xl border-x border-c-surface-variant/[25%] bg-c-surface-container text-c-on-surface dark:border-cd-surface-variant/[25%] dark:bg-cd-surface-container dark:text-cd-on-surface">
  <div class="sticky top-0 -z-10 flex h-screen min-w-[288px] max-w-[288px] flex-col justify-between gap-8 overflow-auto rounded-r-2xl p-8">
    <div class="flex flex-col gap-2">
      {#each appModules[$sidebar.selected].routes as appRoute}
        {#if appRoute.separator}
          <div class="text-muted text-sm px-4 py-2">{appRoute.separator}</div>
        {:else}
          <Button on:click={() => router.push({name: appRoute.name})} variant="{$route.userData.name === appRoute.name ? 'tonal' : 'icon'}" color="secondary" class="flex w-full flex-row items-center gap-4 rounded-full h-[48px] py-4">
            <div class="flex flex-row items-start w-full gap-4 text-c-on-surface dark:text-cd-on-surface">
              <Icon>{appRoute.icon}</Icon>
              <div>{appRoute.title}</div>
            </div>
          </Button>
        {/if}
      {/each}
    </div>
  </div>
</div>
