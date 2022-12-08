declare global {
	interface Navigator {
		MaxTouchPoints: number;
		msMaxTouchPoints: number;
	}
}

export type TouchClassNamesRecord = {
	touch: string;
	notouch: string;
};

// prettier-ignore
export const isTouch: boolean = 'ontouchstart' in document.documentElement || navigator.MaxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;

export const setTouchClass = (
	el: HTMLElement = document.documentElement,
	classNames: TouchClassNamesRecord = {
		touch: 'touch',
		notouch: 'no-touch'
	}
): void => {
	if (isTouch) {
		el.classList.remove(classNames.notouch);
		el.classList.add(classNames.touch);
	} else {
		el.classList.remove(classNames.touch);
		el.classList.add(classNames.notouch);
	}
};

export default isTouch;
