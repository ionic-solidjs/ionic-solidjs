export function viewTransition(fn: () => void) {
	if (!document.startViewTransition) {
		return fn();
	} else {
		return document.startViewTransition(fn);
	}
}
