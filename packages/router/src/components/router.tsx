import { IonRoute, IonRouteRedirect, IonRouter } from '@ionic-solidjs/core';
import type { ComponentRefProps } from '@ionic-solidjs/core';
import type { JSX as IonicJSX } from '@ionic/core';
import { type Component, For } from 'solid-js';

export type RouterProps = {
	root?: string;
	useHash?: boolean;
	onIonRouteDidChange?: (e: Event) => void;
	onIonRouteWillChange?: (e: Event) => void;
	/**
	 * A list of routes to install. Nesting is not supported at the moment
	 */
	routes: Array<RouteParameters | IonicJSX.IonRouteRedirect>;
};

export type RouteParameters = Omit<IonicJSX.IonRoute, 'component' | 'componentProps'> & {
	// Fake property to allow narrowing
	from?: undefined;
} & ComponentRefProps<Component>;

/**
 * A simplified Solid-compatible implementation of the ion-router webcomponent.
 * Make sure to also place an `<IonRouterOutlet>` on the same page as the router, otherwise
 * nothing will be shown.
 *
 * @param props Router configuration
 */
export function Router(props: RouterProps) {
	return (
		<IonRouter
			useHash={props.useHash}
			root={props.root}
			on:ionRouteDidChange={props.onIonRouteDidChange}
			on:ionRouteWillChange={props.onIonRouteWillChange}
		>
			<For each={props.routes}>
				{(route) =>
					route.from !== undefined ? (
						<IonRouteRedirect
							from={route.from}
							to={route.to}
							on:ionRouteRedirectChanged={route.onIonRouteRedirectChanged}
						></IonRouteRedirect>
					) : (
						<IonRoute
							component={route.component}
							componentProps={route.componentProps}
							url={route.url}
							beforeEnter={route.beforeEnter}
							beforeLeave={route.beforeLeave}
							on:ionRouteDataChanged={route.onIonRouteDataChanged}
						/>
					)
				}
			</For>
		</IonRouter>
	);
}
