<script lang="ts">
  import { motion } from '@/lib/app/motion'
  import { fade } from '@/lib/app/motion/animate'
	import NavigationRail from '@/lib/components/navigation/Rail/NavigationRail.svelte';
  import { location } from 'svelte-spa-router'
</script>

<div class="flex flex-row">
	<NavigationRail />
	<div class="z-0 flex min-h-screen w-screen flex-col items-center gap-8 bg-c-surface p-8 text-c-on-surface dark:bg-cd-surface dark:text-cd-on-surface">
		<div>{$location}</div>
		{#key $location}
			<main in:fade={{duration: motion.duration.short2}} out:fade={{duration: motion.duration.short2}} class="max-w-screen-2xl w-full grid grid-cols-1 gap-8">
				<slot/>
			</main>
		{/key}
	</div>
</div>
