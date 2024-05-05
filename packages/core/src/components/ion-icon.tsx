import { defineCustomElement } from 'ionicons/components/ion-icon';
import type { JSX as IoIconsJSX } from 'ionicons/dist/types/components';
import type { JSX as JSXBase } from 'solid-js';
import type { FixIonProps } from '../lib';

defineCustomElement();

export type IonIconProps = FixIonProps<IoIconsJSX.IonIcon> &
	JSXBase.HTMLAttributes<HTMLIonIconElement>;

export function IonIcon(props: IonIconProps) {
	return <ion-icon {...props} />;
}
