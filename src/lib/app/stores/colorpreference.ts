import { writable } from 'svelte/store';
import { persist, createLocalStorage } from '@macfja/svelte-persistent-store'

function createColorPreferenceStore() {
	const { subscribe, set, update } = persist(writable(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'), createLocalStorage(), 'colorPreference')
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
