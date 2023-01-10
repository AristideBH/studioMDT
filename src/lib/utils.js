import { browser } from '$app/environment';

let scrollTop = 0;
let scrollLeft = 0;

export const scroll = class Rectangle {
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
