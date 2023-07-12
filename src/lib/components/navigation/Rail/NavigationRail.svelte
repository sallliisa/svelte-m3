<script lang="ts">
	import Logo from '@/assets/corporate/common/Logo.svelte';
	import { modules } from '@/lib/app/stores/modules';
	import Icon from '@/lib/components/base/Icon.svelte';
	import RailItem from './layouts/RailItem.svelte';
	import {router} from '@/lib/app/router';
	import RailDrawer from './layouts/RailDrawer.svelte';
	import {sidebar} from '@/lib/app/stores/sidebar'

	function handleModuleClick(module: any) {
		sidebar.toggle()
	}

	let currentRoute = null

	$: currentRoute = router.currentRoute()
</script>

<div class="fixed z-50 flex flex-row lg:relative lg:left-0 lg:z-0">
	<div
		class="sticky top-0 flex h-screen max-h-screen w-24 flex-col items-center justify-between gap-4 overflow-auto bg-c-surface-container py-8 dark:bg-cd-surface-container"
	>
		<div class="p-4">
			<Logo class="w-16" />
		</div>
		<div class="flex h-full w-full flex-col items-start gap-4 overflow-auto">
			{#each $modules as module}
				<RailItem on:click={() => handleModuleClick(module)} active={currentRoute.module === module.name} title={module.title}>
					<Icon>{module.icon}</Icon>
				</RailItem>
			{/each}
		</div>
		<RailItem title="Profil" active={true}>
			<Icon size="24" FILL={1}>person</Icon>
		</RailItem>
	</div>
</div>
<div class="fixed left-24 z-10 flex flex-row">
{#if $sidebar.expanded}
	<RailDrawer/>
{/if}
</div>
