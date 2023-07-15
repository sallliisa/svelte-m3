<script lang="ts">
  import { clickOutside } from "@/lib/app/directives/clickOutside"
  import { expand, expandHeightAutoFade } from "@/lib/app/motion/animate"

  export let open: boolean = false
  
  const id = `popover-${Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)}`
  
  function setOpen(value: boolean) {
    open = value
  }
</script>

<div class="relative">
  <button id={id} on:click={() => open = !open}>
    <slot name="trigger"/>
  </button>
  {#if open}
    <div use:clickOutside={{handler: () => open = false, exclude: `#${id}`}} in:expandHeightAutoFade out:expandHeightAutoFade class="absolute mt-2 z-50">
      <slot name="content" {setOpen}/>
    </div>
  {/if}
</div>