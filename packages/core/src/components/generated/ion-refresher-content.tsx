// Auto-generated by scripts/generate.ts

import { defineCustomElement } from '@ionic/core/components/ion-refresher-content';
import type { JSX as IonicJSX } from '@ionic/core';
import { type JSX as JSXBase, splitProps } from 'solid-js';
import type { FixIonProps } from '../../lib';

defineCustomElement();

export type IonRefresherContentProps = FixIonProps<IonicJSX.IonRefresherContent> &
	JSXBase.HTMLAttributes<HTMLIonRefresherContentElement>

export function IonRefresherContent(props: IonRefresherContentProps) {
	const [ _, rest ] = splitProps(
		props, 
		['pullingIcon', 'pullingText', 'refreshingSpinner', 'refreshingText']);
	const componentProps = () => ({
		'prop:pullingIcon': props.pullingIcon,
		'prop:pullingText': props.pullingText,
		'prop:refreshingSpinner': props.refreshingSpinner,
		'prop:refreshingText': props.refreshingText
	});

	return <ion-refresher-content {...componentProps()} {...rest} />;
}
