<script lang="ts">
  import { colorPreference } from "@/lib/app/stores/colorpreference"
  import Button from "@/lib/components/base/Button.svelte"
  import Icon from "@/lib/components/base/Icon.svelte"
  import Modal from "@/lib/components/base/Modal.svelte"
  import Switch from "@/lib/components/base/Switch.svelte"

  const buttonVariants: any[] = ['filled', 'tonal', 'outlined', 'icon']
  const buttonColors: any[] = ['primary', 'secondary', 'error', 'success', 'warning']
</script>

<div class="w-screen min-h-screen bg-surface dark:bg-cd-surface text-c-on-surface dark:text-cd-on-surface">
  <div class="w-full p-16  flex justify-between">
    <div class="text-xl text-muted">Material Design 3 / Svelte</div>
    <Button variant="icon" square on:click={() => colorPreference.toggle()}><Icon class="text-c-on-surface dark:text-cd-on-surface">{$colorPreference}_mode</Icon></Button>
  </div>
  <div class="px-32 pb-32 flex flex-col gap-16">
    <div class="flex flex-col gap-8">
      <div class="text-4xl font-bold">Buttons</div>
      <div class="flex flex-row gap-4 items-center">
        {#each buttonVariants as variant}        
          <div class="flex flex-col gap-4">
            {#each buttonColors as color}
              <Button {variant} {color} class="capitalize">{color}</Button>
            {/each}
          </div>
        {/each}
      </div>
    </div>
    <div class="flex flex-col gap-8">
      <div class="text-4xl font-bold">Modal</div>
      <div class="flex flex-row gap-4 items-center">
        <Modal>
          <Button slot="trigger">
            Open Modal
          </Button>
          <div slot="icon"><Icon size=32>delete_forever</Icon></div>
          <div slot="header">
            <div>Delete "Item"</div>
          </div>
          <div slot="content" class="w-full flex items-center justify-center">You will not be able to restore "Item" once it is deleted. Continue?</div>
          <div slot="actions" class="flex gap-2" let:closeModal>
            <Button variant="icon" on:click={closeModal}>Delete</Button>
            <Button color="error" on:click={closeModal}>Cancel</Button>
          </div>
        </Modal>
      </div>
    </div>
    <div class="flex flex-col gap-8">
      <div class="text-4xl font-bold">Switch</div>
      <div class="flex flex-row gap-4 items-center">
        <Switch/>
      </div>
    </div>
  </div>
</div>