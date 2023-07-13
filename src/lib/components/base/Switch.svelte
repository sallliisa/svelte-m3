<script lang="ts">
  export let modelValue = false
  
  export let onToggle: (value: boolean) => void = () => {}
  export let onActive: () => void = () => {}
  export let onDeactive: () => void = () => {}

  const classMap = {
    track: {
      false: 'bg-c-surface-container-highest dark:bg-cd-surface-container-highest outline outline-2 outline-c-outline dark:outline-cd-outline',
      true: 'bg-c-primary dark:bg-cd-primary'
    },
    thumb: {
      false: 'bg-c-outline dark:bg-cd-outline',
      true: 'bg-c-on-primary dark:bg-cd-on-primary translate-x-[22px]'
    }
  }

  function handleClick() {
    modelValue = !modelValue
    onToggle(modelValue)
    if (modelValue) {
      onActive()
    } else {
      onDeactive()
    }
  }
</script>

<button on:click={handleClick} class="p-2 rounded-full min-w-[52px] max-w-[52px] {classMap.track[String(modelValue)]}">
  <div class="w-full h-full flex">
    <div class="min-w-[16px] min-h-[16px] rounded-full transition-all {classMap.thumb[String(modelValue)]}"></div>
  </div>
</button>