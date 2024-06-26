// Auto-generated by scripts/generate.ts

import { defineCustomElement } from '@ionic/core/components/ion-segment';
import type { JSX as IonicJSX } from '@ionic/core';
import { type JSX as JSXBase, splitProps } from 'solid-js';
import type { FixIonProps } from '../../lib';

defineCustomElement();

export type IonSegmentProps = FixIonProps<IonicJSX.IonSegment> &
	JSXBase.HTMLAttributes<HTMLIonSegmentElement>

export function IonSegment(props: IonSegmentProps) {
	const [ _, rest ] = splitProps(
		props,
		['color', 'disabled', 'mode', 'scrollable', 'selectOnFocus', 'swipeGesture', 'value']);
	const componentProps = () => ({
		'prop:color': props.color,
		'prop:disabled': props.disabled,
		'prop:mode': props.mode,
		'prop:scrollable': props.scrollable,
		'prop:selectOnFocus': props.selectOnFocus,
		'prop:swipeGesture': props.swipeGesture,
		'prop:value': props.value
	});

	return <ion-segment {...componentProps()} {...rest} />;
}
