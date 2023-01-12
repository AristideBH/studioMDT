import { writable } from 'svelte/store';

export const menuItems = [
	{ text: 'Produits', url: '/produits' },
	{ text: 'Collaborations', url: '/' },
	{ text: 'À propos', url: '/a-propos' }
];

const createMenu = () => {
	const { subscribe, set, update } = writable(false);

	return {
		subscribe,
		open: () => {
			set(true);
		},
		close: () => {
			set(false);
		},
		toggle: () => {
			update((n) => !n);
		}
	};
};

export const menu = createMenu();
