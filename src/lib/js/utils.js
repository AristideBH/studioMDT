import { browser } from '$app/environment';

let scrollTop = 0;
let scrollLeft = 0;

export const scroll = class scrollUtils {
	root;
	overflowClass = 'overflow:hidden';
	constructor() {
		if (browser) {
			this.root = document.getElementsByTagName('html')[0];
		}
	}

	enable() {
		if (browser) {
			this.root.classList.remove(this.overflowClass);
			window.onscroll = () => {
				return;
			};
			return 'Body scroll active';
		}
		return;
	}

	disable() {
		if (browser) {
			this.root.classList.add(this.overflowClass);
			scrollTop = window.pageYOffset || window.document.documentElement.scrollTop;
			(scrollLeft = window.pageXOffset || window.document.documentElement.scrollLeft),
				(window.onscroll = () => {
					window.scrollTo(scrollLeft, scrollTop);
				});
			return 'Body scroll disabled';
		}
		return;
	}
};

export function slugify(text) {
	return text
		.toString()
		.toLowerCase()
		.replace(/(\w)\'/g, '$1') // Special case for apostrophes
		.replace(/[^a-z0-9_\-]+/g, '-') // Replace all non-word chars with -
		.replace(/\-\-+/g, '-') // Replace multiple - with single -
		.replace(/^-+/, '') // Trim - from start of text
		.replace(/-+$/, ''); // Trim - from end of text
}
