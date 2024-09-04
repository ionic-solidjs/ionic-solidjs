import type { JSX as IonicJSX } from '@ionic/core';
import { defineCustomElement } from '@ionic/core/components/ion-route';
import { getOwner, type JSX as JSXBase, splitProps } from 'solid-js';
import type { FixIonProps } from '../lib';
import { ComponentRefElementName } from './ComponentRef';

defineCustomElement();

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
					component: props.component,
					componentProps: props.componentProps ?? {},
					owner: getOwner(),
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
