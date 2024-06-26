// Auto-generated by scripts/generate.ts

import { defineCustomElement } from '@ionic/core/components/ion-range';
import type { JSX as IonicJSX } from '@ionic/core';
import { type JSX as JSXBase, splitProps } from 'solid-js';
import type { FixIonProps } from '../../lib';

defineCustomElement();

export type IonRangeProps = FixIonProps<IonicJSX.IonRange> &
	JSXBase.HTMLAttributes<HTMLIonRangeElement>

export function IonRange(props: IonRangeProps) {
	const [ _, rest ] = splitProps(
		props,
		['activeBarStart', 'color', 'debounce', 'disabled', 'dualKnobs', 'label', 'labelPlacement', 'max', 'min', 'mode', 'name', 'pin', 'pinFormatter', 'snaps', 'step', 'ticks', 'value']);
	const componentProps = () => ({
		'prop:activeBarStart': props.activeBarStart,
		'prop:color': props.color,
		'prop:debounce': props.debounce,
		'prop:disabled': props.disabled,
		'prop:dualKnobs': props.dualKnobs,
		'prop:label': props.label,
		'prop:labelPlacement': props.labelPlacement,
		'prop:max': props.max,
		'prop:min': props.min,
		'prop:mode': props.mode,
		'prop:name': props.name,
		'prop:pin': props.pin,
		'prop:pinFormatter': props.pinFormatter,
		'prop:snaps': props.snaps,
		'prop:step': props.step,
		'prop:ticks': props.ticks,
		'prop:value': props.value
	});

	return <ion-range {...componentProps()} {...rest} />;
}
