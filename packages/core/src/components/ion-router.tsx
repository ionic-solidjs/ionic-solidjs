import type { JSX as IonicJSX } from '@ionic/core';
import { defineCustomElement } from '@ionic/core/components/ion-router';
import { type ParentProps, createEffect, createSignal, splitProps } from 'solid-js';
import type { JSX as JSXBase } from 'solid-js';
import { RouterContextProvider } from '../hooks';
import type { FixIonProps } from '../lib';
import { fixProps } from '../utils/fixProps';

defineCustomElement();

export type IonRouterProps = FixIonProps<IonicJSX.IonRouter> &
	JSXBase.HTMLAttributes<HTMLIonRouterElement>;

export function IonRouter(props: ParentProps<IonRouterProps>) {
	const [_, propsToFix] = splitProps(props, ['ref']);
	const fixedProps = () => fixProps(propsToFix);
	const [router, setRouter] = createSignal<HTMLIonRouterElement>();

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
		<ion-router {...fixedProps()} ref={setRouter}>
			<RouterContextProvider value={router()}>{props.children}</RouterContextProvider>
		</ion-router>
	);
}
