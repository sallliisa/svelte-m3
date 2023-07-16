<script lang="ts">
  import Radio from "./Radio.svelte"

  export let modelValue = ''
  
  export let items: Array<any> = []
  export let view: string = 'name'
  export let pick: string = 'id'
  export let variant: 'native' | 'card' = 'native'
</script>

gamer {modelValue}

{#if variant === 'native'}
  {#each items as item}
    <Radio description={item[view]} on:click={() => modelValue = item[pick]} active={modelValue === item[pick]}/>
  {/each}
{/if}