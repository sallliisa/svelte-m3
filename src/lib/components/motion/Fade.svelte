<script>
  import { motion } from "@/lib/app/motion"
  import { fade } from "@/lib/app/motion/animate"
  import { easing } from "@/lib/app/motion/easing"
  import { location } from "svelte-spa-router"

</script>

{#key $location}
  <div in:fade={{duration: motion.duration.short2, easing: motion.easing.legacy, delay: motion.duration.short2}} out:fade={{duration: motion.duration.short2, easing: motion.easing.legacy}}>
    <slot/>
  </div>
{/key}