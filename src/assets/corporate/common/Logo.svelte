<script lang="ts">
	import LogoColor from '../static/logo-color.svelte';
	import LogoWhite from '../static/logo-white.svelte';

	export let color: 'white' | 'color' = 'color';
	export let strict: boolean = false;

	const iconMap: any = {
		white: LogoWhite,
		color: LogoColor
	};
</script>

<div>
	<div class={$$props.class}>
		<svelte:component this={iconMap[strict ? color : color]} />
	</div>
</div>
