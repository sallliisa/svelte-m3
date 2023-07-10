import { writable } from 'svelte/store';

function createColorPreferenceStore() {
	const { subscribe, set, update } = writable(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
	function toggle() {
		update((color) => (color === 'dark' ? 'light' : 'dark'));
	}
	return {
		subscribe,
		set,
		toggle,
		update
	};
}

export const colorPreference = createColorPreferenceStore();
