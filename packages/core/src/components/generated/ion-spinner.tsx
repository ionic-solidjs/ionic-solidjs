// Auto-generated by scripts/generate.ts

import { defineCustomElement } from '@ionic/core/components/ion-spinner';
import type { JSX as IonicJSX } from '@ionic/core';
import { type JSX as JSXBase, splitProps } from 'solid-js';
import type { FixIonProps } from '../../lib';

defineCustomElement();

export type IonSpinnerProps = FixIonProps<IonicJSX.IonSpinner> &
	JSXBase.HTMLAttributes<HTMLIonSpinnerElement>

export function IonSpinner(props: IonSpinnerProps) {
	const [ _, rest ] = splitProps(
		props, 
		['color', 'duration', 'name', 'paused']);
	const componentProps = () => ({
		'prop:color': props.color,
		'prop:duration': props.duration,
		'prop:name': props.name,
		'prop:paused': props.paused
	});

	return <ion-spinner {...componentProps()} {...rest} />;
}
