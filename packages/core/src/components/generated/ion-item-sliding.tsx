// Auto-generated by scripts/generate.ts

import { defineCustomElement } from '@ionic/core/components/ion-item-sliding';
import type { JSX as IonicJSX } from '@ionic/core';
import { type JSX as JSXBase, splitProps } from 'solid-js';
import type { FixIonProps } from '../../lib';

defineCustomElement();

export type IonItemSlidingProps = FixIonProps<IonicJSX.IonItemSliding> &
	JSXBase.HTMLAttributes<HTMLIonItemSlidingElement>

export function IonItemSliding(props: IonItemSlidingProps) {
	const [ _, rest ] = splitProps(
		props, 
		['disabled']);
	const componentProps = () => ({
		'prop:disabled': props.disabled
	});

	return <ion-item-sliding {...componentProps()} {...rest} />;
}
