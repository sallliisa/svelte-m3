import { writable } from 'svelte/store';

function createSidebarStore() {
	const { subscribe, set, update } = writable({
		expanded: false,
		selected: 0,
		active: 0
	});

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
