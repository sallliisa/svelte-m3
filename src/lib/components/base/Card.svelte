<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	type CardColors =
		| 'primary'
		| 'secondary'
		| 'tertiary'
		| 'warning'
		| 'error'
		| 'info'
		| 'success'
		| 'surface-lowest'
		| 'surface-low'
		| 'surface'
		| 'surface-high'
		| 'surface-highest';

	export let interactive: boolean = false;
	export let color: CardColors = 'surface';

	const colorMap = {
		primary: 'bg-c-primary-container dark:bg-cd-primary-container text-c-on-primary-container dark:text-cd-on-primary-container',
		secondary: 'bg-c-secondary-container dark:bg-cd-secondary-container text-c-on-secondary-container dark:text-cd-on-secondary-container',
		tertiary: 'bg-c-tertiary-container dark:bg-cd-tertiary-container text-c-on-container dark:text-cd-on-container',
		warning: 'bg-c-warning-container dark:bg-cd-warning-container text-c-on-warning-container dark:text-cd-on-warning-container',
		error: 'bg-c-error-container dark:bg-cd-error-container text-c-on-error-container dark:text-cd-on-error-container',
		info: 'bg-c-info-container dark:bg-cd-info-container text-c-on-info-container dark:text-cd-on-info-container',
		success: 'bg-c-success-container dark:bg-cd-success-container text-c-on-success-container dark:text-cd-on-success-container',
		'surface-lowest': 'bg-c-surface-container-lowest dark:bg-cd-surface-container-lowest text-c-on-surface dark:text-cd-on-surface',
		'surface-low': 'bg-c-surface-container-low dark:bg-cd-surface-container-low text-c-on-surface dark:text-cd-on-surface',
		surface: 'bg-c-surface-container dark:bg-cd-surface-container text-c-on-surface dark:text-cd-on-surface',
		'surface-high': 'bg-c-surface-container-high dark:bg-cd-surface-container-high text-c-on-surface dark:text-cd-on-surface',
		'surface-highest': 'bg-c-surface-container-highest dark:bg-cd-surface-container-highest text-c-on-surface dark:text-cd-on-surface'
	};
</script>

<div
	class="{interactive
		? 'overlay cursor-pointer after:bg-c-on-surface/[8%] after:active:bg-c-on-surface/[12%] dark:after:bg-cd-on-surface/[8%] dark:after:active:bg-cd-on-surface/[12%]'
		: ''} {twMerge('flex flex-col gap-4 rounded-xl px-4 py-4', $$props.class)} {colorMap[color]}"
>
	<slot />
</div>
