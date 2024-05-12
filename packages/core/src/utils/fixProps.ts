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
