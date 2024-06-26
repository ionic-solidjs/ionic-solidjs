// Auto-generated by scripts/generate.ts

import { defineCustomElement } from '@ionic/core/components/ion-nav-link';
import type { JSX as IonicJSX } from '@ionic/core';
import { type JSX as JSXBase, splitProps } from 'solid-js';
import type { FixIonProps } from '../../lib';

defineCustomElement();

export type IonNavLinkProps = FixIonProps<IonicJSX.IonNavLink> &
	JSXBase.HTMLAttributes<HTMLIonNavLinkElement>

export function IonNavLink(props: IonNavLinkProps) {
	const [ _, rest ] = splitProps(
		props,
		['component', 'componentProps', 'routerAnimation', 'routerDirection']);
	const componentProps = () => ({
		'prop:component': props.component,
		'prop:componentProps': props.componentProps,
		'prop:routerAnimation': props.routerAnimation,
		'prop:routerDirection': props.routerDirection
	});

	return <ion-nav-link {...componentProps()} {...rest} />;
}
