<script lang="ts">
  import Card from "../base/Card.svelte"
  import Icon from "../base/Icon.svelte"
  import Popover from "../base/Popover.svelte"
  import TextInput from "./TextInput.svelte"
  
  export let error: boolean = false
  export let label: string = ''
  export let placeholder: string = 'Pilih'
  export let errorMessage: string = 'Error'
  export let disableErrorMessage: boolean = false
  export let items: any[] = []
  export let pick: string = 'id'
  export let view: string = 'name'
  export let allowMulti: boolean = false
  export let searchable: boolean = false
  
  export let modelValue: string | any[] = allowMulti ? [] : ''

  let selected: string | any[] = allowMulti ? [] : ''
  let query = ''
  let filteredItems = items
  let displayValue = ''

  function updateModelValue() {
    if (allowMulti) modelValue = (selected as any[]).map((item: any) => item[pick])
    else modelValue = (selected as any)[pick]
  }

  function handleItemClick(item: any, setOpen: Function) {
    if (!allowMulti) {
      selected = item
      setOpen(false)
    } else {
      if (modelValue.includes(item[pick])) selected = (selected as any[]).filter((selectedItem: any) => selectedItem[pick] !== item[pick])
      else selected = [...(selected as any[]), item]
    }
    updateModelValue() 
  }

  $: filteredItems = items.filter((item: any) => item[view].toLowerCase().includes(query.toLowerCase()))
  $: displayValue = allowMulti ? (selected as any[])?.map(item => item?.[view]).join(', ') || '' : selected?.[view] || ''
</script>

<div>
  <div class="flex flex-col gap-2">
    {#if label}<label class="text-sm">{label}</label>{/if}
    <Popover>
      <button slot="trigger" class="rounded-lg px-4 py-2 bg-c-surface-container-high dark:bg-cd-surface-container-high flex flex-row gap-2 items-center">
        {#if displayValue}
          <p>{displayValue}</p>
        {:else}
          <p class="text-muted">{placeholder}</p>
        {/if}
        <Icon>expand_more</Icon>
      </button>
      <Card slot="content" color="surface-high" let:setOpen class="p-2">
        {#if searchable}<TextInput bind:modelValue={query} disableErrorMessage></TextInput>{/if}
        {#if filteredItems.length}
          {#each filteredItems as item}
            <Card color="surface-high" interactive class="px-4 py-2 flex flex-row items-center justify-between gap-4" on:click={() => [handleItemClick(item, setOpen)]}>
              <div>{item[view]}</div>
              {#if allowMulti}
                <Icon class={modelValue.includes(item[pick]) ? 'opacity-100' : 'opacity-0'}>check</Icon>
              {:else}
                <Icon class={modelValue === item[pick] ? 'opacity-100' : 'opacity-0'}>check</Icon>
              {/if}
            </Card>
          {/each}
        {:else}
          <p class="text-muted text-xs">Tidak ada data</p>
        {/if}
      </Card>
    </Popover>
    {#if !disableErrorMessage}<label class="text-sm text-c-error dark:text-cd-error {error ? 'opacity-100' : 'opacity-0'}">{errorMessage}</label>{/if}
  </div>
</div>