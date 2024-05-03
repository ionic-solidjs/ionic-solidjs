import { createContext, useContext } from 'solid-js';

/**
 * A context to get the instance of the router object.
 */
export const RouterContext = createContext<HTMLIonRouterElement>();

/**
 * Hook to access ion-router element.
 */
export function useRouter() {
	return useContext(RouterContext);
}

/**
 * @internal
 */
export const RouterContextProvider = RouterContext.Provider;
