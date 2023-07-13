<script lang="ts">
  import { portal } from "@/lib/app/utils/dom"
  import { fade, expandHeightAutoFade } from "@/lib/app/motions/animate"
  import { legacy } from "@/lib/app/motions/easing"

  let showModal = false

  function closeModal() {showModal = false}

  const SLOTS = $$props.$$slots
</script>

<div on:click={() => showModal = true} role="button">
  <slot name="trigger"/>
</div>
{#if showModal}
  <div use:portal={'#root'} on:click={() => showModal = false} in:fade={{easing: legacy, duration: 150}} out:fade={{easing: legacy, duration: 150}} id="app-modal-scrim" class="w-screen absolute top-0 opacity-30 z-50 h-screen max-h-screen max-w-full bg-black"/>
  <div use:portal={'#root'} class="absolute z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" id="app-modal-content">
    <div in:expandHeightAutoFade out:expandHeightAutoFade class="z-50 relative overflow-hidden rounded-[28px] w-full max-w-5xl bg-c-surface-container dark:bg-cd-surface-container text-c-on-surface dark:text-cd-on-surface">
      <div class="flex flex-col gap-6 m-6">
        <div class="flex flex-col gap-4">
          {#if SLOTS.icon}<div class="w-full flex items-center justify-center"><slot name="icon" {closeModal}/></div>{/if}
          {#if SLOTS.header}<div class="text-2xl {SLOTS.icon ? 'flex w-full items-center justify-center' : ''}"><slot name="header" {closeModal}/></div>{/if}
          {#if SLOTS.content}<div class="text-c-on-surface-variant dark:text-cd-on-surface-variant"><slot name="content" {closeModal}/></div>{/if}
        </div>
        {#if SLOTS.actions}
          <div class="w-full items-center justify-end flex flex-row gap-8">
            <slot name="actions" {closeModal}/>
          </div>
        {/if}
      </div>
    </div>
  </div>
{/if}

