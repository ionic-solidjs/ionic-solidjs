// Auto-generated by scripts/generate.ts

import { defineCustomElement } from '@ionic/core/components/ion-row';
import type { JSX as IonicJSX } from '@ionic/core';
import { type JSX as JSXBase, splitProps } from 'solid-js';
import type { FixIonProps } from '../../lib';

defineCustomElement();

export type IonRowProps = FixIonProps<IonicJSX.IonRow> &
	JSXBase.HTMLAttributes<HTMLIonRowElement>

export function IonRow(props: IonRowProps) {
	const [ _, rest ] = splitProps(
		props,
		[]);
	const componentProps = () => ({
		
	});

	return <ion-row {...componentProps()} {...rest} />;
}
