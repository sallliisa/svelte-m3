<script lang="ts">
  import Button from "@/lib/components/base/Button.svelte"
  import Icon from "@/lib/components/base/Icon.svelte"
  import Modal from "@/lib/components/base/Modal.svelte"
  import Switch from "@/lib/components/base/Switch.svelte"
  import { colorPreference } from "@/lib/app/stores/colorpreference"
</script>


<Modal>
  <Button slot="trigger">
    gamer
  </Button>
  <div slot="icon"><Icon size=32>delete_forever</Icon></div>
  <div slot="header">
    <div>Delete "Gamer"</div>
  </div>
  <div slot="content" class="w-full flex items-center justify-center">You will not be able to restore "Gamer" once it is deleted. Continue?</div>
  <div slot="actions" class="flex gap-2" let:closeModal>
    <Button variant="icon" on:click={closeModal}>Delete</Button>
    <Button color="error" on:click={closeModal}>Cancel</Button>
  </div>
</Modal>
<Switch modelValue={$colorPreference === 'dark'} onToggle={() => colorPreference.toggle()}/>