const NON_PROP_REGEX = /(^on[A-Z]|^(children|key|class|classList|style|ref)$|:)/;

/**
 * @param props
 * @internal
 */
export function fixProps(props: Record<string, any>) {
	const newProps: Record<string, any> = {};
	const keys = Object.keys(props);

	for (const key of keys) {
		if (NON_PROP_REGEX.test(key)) {
			newProps[key] = props[key];
		} else {
			newProps[`prop:${key}`] = props[key];
		}
	}

	return newProps;
}

/**
 * @param props
 * @internal
 */
export function prefixJSProps(props: Record<string, any>) {
	const newProps: Record<string, any> = {};
	const keys = Object.keys(props);

	for (const key of keys) {
		newProps[`prop:${key}`] = props[key];
	}

	return newProps;
}

/**
 * @param props
 * @internal
 */
export function prefixHTMLAttributes(props: Record<string, any>) {
	return props;
	// We cannot prefix everything. At least prefixing events like onclick, onkeydown, oninput, etc. cannot be prefixed.
	// const newProps: Record<string, any> = {};
	// const keys = Object.keys(props);
	//
	// for (const key of keys) {
	// 	newProps[`attr:${key}`] = props[key];
	// }
	//
	// return newProps;
}
