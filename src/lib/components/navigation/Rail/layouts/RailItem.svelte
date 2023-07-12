<script lang="ts">
	export let active: boolean;
	export let title: string;
</script>

<div class="relative w-full">
	<button on:click class="flex w-full flex-col items-center justify-center gap-1 rounded-full bg-transparent text-c-on-surface dark:text-cd-on-surface">
		<div
			class={`overlay rounded-full px-6 py-2 text-c-on-surface after:hover:bg-c-on-surface/[8%] after:active:bg-c-on-surface/[12%] dark:text-cd-on-surface dark:after:hover:bg-cd-on-surface/[8%] dark:after:active:bg-cd-on-surface/[12%] ${
				active ? 'bg-c-secondary-container dark:bg-cd-secondary-container' : ''
			}`}
		>
			<slot />
		</div>
		<div class={`${active ? 'font-semibold text-c-on-secondary-container dark:text-cd-on-secondary-container' : ''} text-xs px-[2px]`}>{title}</div>
	</button>
</div>
