<script lang="ts">
	import Logo from '@/assets/corporate/common/Logo.svelte';
	import { modules } from '@/lib/app/stores/modules';
	import Icon from '@/lib/components/base/Icon.svelte';
	import RailItem from './layouts/RailItem.svelte';
	import {route} from '@/lib/app/router';
	import RailDrawer from './layouts/RailDrawer.svelte';
	import {sidebar} from '@/lib/app/stores/sidebar'
	import {emphasized_decelerate} from '@/lib/app/utils/easing'
	import { expand } from '@/lib/app/utils/animate';
  import { clickOutside } from '@/lib/app/directives/clickOutside';

	function handleModuleClick(module: any, index: number) {
		sidebar.update((state) => {
			state.expanded = true
			state.selected = index
			return state
		})
	}

	function handleClickOutside(event) {
		alert('Click outside!');
	}
</script>

<div id="app-sidebar" class="fixed z-50 flex flex-row lg:relative lg:left-0 lg:z-0">
	<div
		class="sticky top-0 flex h-screen max-h-screen w-24 flex-col items-center justify-between gap-4 overflow-auto bg-c-surface-container py-8 dark:bg-cd-surface-container"
	>
		<div id="gamer1" class="p-4">
			<Logo class="w-16" />
		</div>
		<div id="gamer2" class="flex h-full w-full flex-col items-start gap-4 overflow-auto">
			{#each $modules as module, index}
				<RailItem on:click={() => handleModuleClick(module, index)} active={$route.userData.module === module.name} title={module.title}>
					<Icon>{module.icon}</Icon>
				</RailItem>
			{/each}
		</div>
		<RailItem title="Profil" active={true}>
			<Icon size="24" FILL={1}>person</Icon>
		</RailItem>
	</div>
</div>
{#if $sidebar.expanded}
<div use:clickOutside={{handler: () => sidebar.toggle(), exclude: '#app-sidebar'}} in:expand={{duration: 350, easing: emphasized_decelerate, property: 'width', target: 288}} out:expand={{duration: 350, easing: emphasized_decelerate, property: 'width', target: 288}} class="fixed left-24 z-10 flex flex-row">
	<RailDrawer/>
</div>
{/if}
