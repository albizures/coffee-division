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
