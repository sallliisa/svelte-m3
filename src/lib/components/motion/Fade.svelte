<script>
  import { motion } from "@/lib/app/motion"
  import { fade } from "@/lib/app/motion/animate"
  import { location } from "svelte-spa-router"

</script>
{#key $location}
<div in:fade={{duration: motion.duration.short2, delay: motion.duration.short2}} out:fade={{duration: motion.duration.short2}}>
  <slot/>
</div>
{/key}