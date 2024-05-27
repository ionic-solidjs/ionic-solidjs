// Auto-generated by scripts/generate.ts

import { defineCustomElement } from '@ionic/core/components/ion-picker-column-option';
import type { JSX as IonicJSX } from '@ionic/core';
import { type JSX as JSXBase, splitProps } from 'solid-js';
import type { FixIonProps } from '../../lib';

defineCustomElement();

export type IonPickerColumnOptionProps = FixIonProps<IonicJSX.IonPickerColumnOption> &
	JSXBase.HTMLAttributes<HTMLIonPickerColumnOptionElement>

export function IonPickerColumnOption(props: IonPickerColumnOptionProps) {
	const [ _, rest ] = splitProps(
		props, 
		['color', 'disabled', 'value']);
	const componentProps = () => ({
		'prop:color': props.color,
		'prop:disabled': props.disabled,
		'prop:value': props.value
	});

	return <ion-picker-column-option {...componentProps()} {...rest} />;
}
