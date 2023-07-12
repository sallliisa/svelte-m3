<script lang="ts">
  import { modules } from '@/lib/app/stores/modules';
  import Button from '@/lib/components/base/Button.svelte';
  import Icon from '@/lib/components/base/Icon.svelte';

  $: appModules = $modules as any
</script>

<div class="z-10 overflow-hidden rounded-r-2xl border-x border-c-surface-variant/[25%] bg-c-surface-container text-c-on-surface dark:border-cd-surface-variant/[25%] dark:bg-cd-surface-container dark:text-cd-on-surface">
  <div class="sticky top-0 -z-10 flex h-screen min-w-[288px] max-w-[288px] flex-col justify-between gap-8 overflow-auto rounded-r-2xl p-8">
    {#each appModules[0].routes as route}
      <Button variant="icon" class="flex w-full flex-row items-center gap-4 rounded-full px-4 py-4">
        <Icon>{route.icon}</Icon>
        <div>{route.title}</div>
      </Button>
    {/each}
  </div>
</div>
