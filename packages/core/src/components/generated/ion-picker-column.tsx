// Auto-generated by scripts/generate.ts

import { defineCustomElement } from '@ionic/core/components/ion-picker-column'
import { fixProps } from '../../utils/fixProps'
import type { JSX as IonicJSX } from '@ionic/core'
import type { JSX as JSXBase } from 'solid-js'
import type { FixIonProps } from '../../lib'

defineCustomElement()

export type IonPickerColumnProps = FixIonProps<IonicJSX.IonPickerColumn> &
	JSXBase.HTMLAttributes<HTMLIonPickerColumnElement>

export function IonPickerColumn(props: IonPickerColumnProps) {
	const fixedProps = () => fixProps(props);
	//@ts-ignore
	return <ion-picker-column {...fixedProps()} />
}