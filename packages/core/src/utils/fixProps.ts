const EVENT_PROP_REGEX = /^on[A-Z]/;

/**
 * @param props
 * @internal
 */
export function fixProps(props: Record<string, any>) {
    const newProps: Record<string, any> = {};
    const keys = Object.keys(props);

    for (const key of keys) {
        if (key.includes(':') || key === 'children' || EVENT_PROP_REGEX.test(key)) {
            newProps[key] = props[key];
        }
        else {
            newProps[`prop:${key}`] = props[key];
        }
    }

    return newProps;
}