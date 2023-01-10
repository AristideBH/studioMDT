import { writable } from 'svelte/store';

export const menuItems = [
	{
		text: 'Qui sommes-nous ?',
		url: '/qui-sommes-nous'
	},
	{
		text: 'Mi2 Biocontrol',
		url: '/'
	},
	{
		text: 'Mi2 CDMO',
		url: '/'
	},
	{
		text: 'Commander',
		url: '/'
	}
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
