import type { JSX as IonicJSX } from '@ionic/core';
import { defineCustomElement } from '@ionic/core/components/ion-route';
import { type Component, splitProps } from 'solid-js';
import type { JSX as JSXBase } from 'solid-js';
import { RouterContextProvider, useRouter } from '../hooks';
import type { FixIonProps } from '../lib';
import { fixProps } from '../utils/fixProps';
import {
	ComponentRefElementName,
	type ComponentRefProps,
	type RefComponentProps,
} from './ComponentRef';

defineCustomElement();

type RouteRouterContextProviderProps = ComponentRefProps<Component> & {
	router: HTMLIonRouterElement | undefined;
};

// Wrapper around the route component providing correct value for RouterContext
function RouteRouterContextProvider(props: RefComponentProps<RouteRouterContextProviderProps>) {
	/*
	 * A shadow root prevents ion-modal from finding its trigger elements.
	 * `noShadowDOM()` - is not working; it fails because it's not able to find the element.
	 * TODO: Why is this required here? Is is required? Should we force no shadow DOM? Shouldn't it be configurable?
	 */
	Object.defineProperty(props.componentOptions.element, 'renderRoot', {
		value: props.componentOptions.element,
	});

	return (
		<RouterContextProvider value={props.router}>
			{props.component(props.componentProps)}
		</RouterContextProvider>
	);
}

type IonRouteProps<TComponent extends (...args: any) => any> = FixIonProps<
	Omit<IonicJSX.IonRoute, 'component' | 'componentProps'>
> &
	ComponentRefProps<TComponent> &
	JSXBase.HTMLAttributes<HTMLIonRouteElement>;

export function IonRoute<TComponent extends (...args: any) => any>(
	props: IonRouteProps<TComponent>
) {
	const router = useRouter();
	const [_, propsToFix] = splitProps(props, ['component', 'componentProps']);
	const fixedProps = () => fixProps(propsToFix);

	return (
		<ion-route
			{...fixedProps()}
			component={ComponentRefElementName}
			component-props={{
				component: RouteRouterContextProvider,
				componentProps: {
					component: props.component,
					componentProps: props.componentProps ?? {},
					router: router,
				} satisfies RouteRouterContextProviderProps,
			}}
		></ion-route>
	);
}
