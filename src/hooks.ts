import React from 'react';

function easeOutCubic(x: number): number {
	return 1 - Math.pow(1 - x, 3);
}

export function useScroll(parentName: string, itemName: string) {
	return function onMoveHistory() {
		const history = document.querySelector(parentName);
		const item = document.querySelector(itemName);
		const { width, marginRight } = window.getComputedStyle(item);

		if (!item || !history) {
			return;
		}

		const original = history.scrollLeft;
		const extra = parseInt(width, 10) + parseInt(marginRight, 10);

		move();
		function move(progress = 0) {
			if (progress < 1) {
				history.scrollLeft =
					original + easeOutCubic(progress) * extra;
				requestAnimationFrame(() => move(progress + 0.03));
			}
		}
	};
}

type Duration =
	| 'animate-duration-1000'
	| 'animate-duration-2000'
	| 'animate-duration-3000';

export function useAnimateOnScreen(
	animate: string,
	duration: Duration = 'animate-duration-2000',
) {
	return React.useCallback(
		(element: HTMLDivElement) => {
			if (!element) {
				return;
			}

			element.classList.add(duration);
			const observer = new IntersectionObserver(([entry]) => {
				console.log(entry);

				if (!entry.isIntersecting) {
					return;
				}
				element.classList.add(animate);
				observer.disconnect();
			});
			observer.observe(element);
		},
		[animate, duration],
	);
}
