import { writable } from 'svelte/store';

function createSidebarStore() {
	const { subscribe, set, update } = writable<{
    expanded: boolean
    selected: number | string
    active: number
  }>({
    expanded: false,
    selected: 0,
    active: 0,
  })

	function toggle() {
		update((state) => {
			return {
				...state,
				expanded: !state.expanded
			};
		});
	}

	return {
		subscribe,
		set,
		update,
		toggle
	};
}

export const sidebar = createSidebarStore();
