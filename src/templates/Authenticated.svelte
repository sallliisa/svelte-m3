<script lang="ts">
	import NavigationRail from '@/lib/components/navigation/Rail/NavigationRail.svelte';
</script>

<div class="flex flex-row font-sans">
	<NavigationRail />
	<div class="z-0 flex min-h-screen w-screen flex-col items-center gap-8 bg-c-surface p-8 text-c-on-surface dark:bg-cd-surface dark:text-cd-on-surface">
		<main>
			<slot/>
		</main>
	</div>
</div>
