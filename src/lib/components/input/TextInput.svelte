<script lang="ts">
  export let modelValue: string = ''

  export let error: boolean = false
  export let label: string = ''
  export let errorMessage: string = 'Error'
  export let disableErrorMessage: boolean = false
  export let prefix: string = ''
  export let suffix: string = ''
  export let validator: (value: string) => boolean = () => true

  let userHasChanged: boolean = false

  $: error = !validator(modelValue) && userHasChanged
</script>

<div class="flex flex-col gap-2">
  {#if label}<label class="text-sm">{label}</label>{/if}
  <div class="rounded-lg flex flex-row gap-4 outline outline-1 focus-within:outline-2 transition-all ease-linear py-3 pl-4 {!error ? 'outline-c-outline dark:outline-cd-outline focus-within:outline-c-primary focus-within:dark:outline-cd-primary' : 'outline-c-error dark:outline-cd-error'}">
    {#if prefix}<p>{prefix}</p>{/if}
    <input class="bg-transparent focus-visible:outline-none w-full" bind:value={modelValue} on:input={() => userHasChanged = true}>
    {#if suffix}<p class="mr-4">{suffix}</p>{/if}
  </div>
  {#if !disableErrorMessage}<label class="text-sm text-c-error dark:text-cd-error {error ? 'opacity-100' : 'opacity-0'}">{errorMessage}</label>{/if}
</div>