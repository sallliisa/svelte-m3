<script lang="ts">
  import Icon from "../base/Icon.svelte"

  export let modelValue: boolean = false;
  
  export let description: string = '';
  export let active: boolean = false;
  export let passive: boolean = true;

  function handleActive() {
    if (passive) return;
    modelValue = !modelValue;
  }
</script>

<div on:click on:click={handleActive} class="flex flex-row gap-2 items-center group/radio">
  <Icon class="group-hover/radio:brightness-110 cursor-default">{modelValue || active ? 'radio_button_checked' : 'radio_button_unchecked'}</Icon>
  <label>{description}</label>
</div>