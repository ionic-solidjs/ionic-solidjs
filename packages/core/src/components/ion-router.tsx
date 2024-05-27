import type { JSX as IonicJSX } from '@ionic/core';
import { defineCustomElement } from '@ionic/core/components/ion-router';
import { type ParentProps, createEffect, createSignal, splitProps } from 'solid-js';
import type { JSX as JSXBase } from 'solid-js';
import { RouterContextProvider } from '../hooks';
import type { FixIonProps } from '../lib';

defineCustomElement();

export type IonRouterProps = FixIonProps<IonicJSX.IonRouter> &
	JSXBase.HTMLAttributes<HTMLIonRouterElement>;

export function IonRouter(props: ParentProps<IonRouterProps>) {
	const [router, setRouter] = createSignal<HTMLIonRouterElement>();
	const [_, restProps] = splitProps(props, ['ref', 'root', 'useHash']);
	const ionProps = () => ({
		'prop:root': props.root,
		'prop:useHash': props.useHash,
	});

	createEffect(() => {
		const routerElement = router();

		if (typeof props.ref === 'function') {
			if (routerElement) {
				props.ref(routerElement);
			}
		} else if (props.ref !== undefined) {
			props.ref = routerElement;
		}
	});

	return (
		<ion-router {...ionProps()} {...restProps} ref={setRouter}>
			<RouterContextProvider value={router()}>{props.children}</RouterContextProvider>
		</ion-router>
	);
}
