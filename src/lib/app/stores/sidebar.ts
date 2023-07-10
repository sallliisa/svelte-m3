import { writable } from 'svelte/store';

function createSidebarStore() {
	const { subscribe, set, update } = writable({
		expanded: false,
		selected: 0,
		active: 0
	});

	return {
		subscribe,
		set,
		update
	};
}

export const sidebar = createSidebarStore();
