const isTouch =
	'ontouchstart' in document.documentElement ||
	navigator.MaxTouchPoints > 0 ||
	navigator.msMaxTouchPoints > 0;

export default isTouch;

export const setTouchClass = (
	el = document.documentElement,
	classNames = {
		touch: 'touch',
		notouch: 'no-touch'
	}
) => {
	if (isTouch) {
		el.classList.remove(classNames.notouch);
		el.classList.add(classNames.touch);
	} else {
		el.classList.remove(classNames.touch);
		el.classList.add(classNames.notouch);
	}
};
