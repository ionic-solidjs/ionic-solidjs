import type { JSX as IonicJSX } from '@ionic/core';
import { defineCustomElement } from '@ionic/core/components/ion-route';
import { type Component, type JSX as JSXBase, splitProps } from 'solid-js';
import { RouterContextProvider, useRouter } from '../hooks';
import type { FixIonProps } from '../lib';
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

export type IonRouteProps<TComponent> = FixIonProps<
	Omit<IonicJSX.IonRoute, 'component' | 'componentProps'>
> &
	JSXBase.HTMLAttributes<HTMLIonRouteElement> & {
		// The component to render
		component: TComponent;

		// Custom additional data
		data?: any;
	} & (TComponent extends () => any
		? { componentProps?: never }
		: TComponent extends (...args: any[]) => any
			? { componentProps: Parameters<TComponent>[0] }
			: { componentProps?: never });

export function IonRoute<TComponent extends string | ((...args: any[]) => any) = string>(
	props: IonRouteProps<TComponent>
) {
	const router = useRouter();
	const [_, restProps] = splitProps(props, [
		'component',
		'componentProps',
		'beforeEnter',
		'beforeLeave',
		'url',
	]);

	const ionProps = () => ({
		'prop:beforeEnter': props.beforeEnter,
		'prop:beforeLeave': props.beforeLeave,
		'prop:url': props.url,
	});

	const componentProps = () =>
		typeof props.component === 'string'
			? undefined
			: {
					component: RouteRouterContextProvider,
					componentProps: {
						component: props.component,
						componentProps: props.componentProps ?? {},
						router: router,
					} satisfies RouteRouterContextProviderProps,
				};

	return (
		<ion-route
			{...ionProps()}
			{...restProps}
			// I keep this without `prop:` prefix bcs it's not required and at least we can see the value in the DOM
			component={typeof props.component === 'string' ? props.component : ComponentRefElementName}
			prop:componentProps={componentProps()}
		/>
	);
}
