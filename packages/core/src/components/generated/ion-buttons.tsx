// Auto-generated by scripts/generate.ts

import { defineCustomElement } from '@ionic/core/components/ion-buttons'
import { fixProps } from '../../utils/fixProps'
import type { JSX as IonicJSX } from '@ionic/core'
import type { JSX as JSXBase } from 'solid-js'
import type { FixIonProps } from '../../lib'

defineCustomElement()

export type IonButtonsProps = FixIonProps<IonicJSX.IonButtons> &
	JSXBase.HTMLAttributes<HTMLIonButtonsElement>

export function IonButtons(props: IonButtonsProps) {
	const fixedProps = () => fixProps(props);
	//@ts-ignore
	return <ion-buttons {...fixedProps()} />
}