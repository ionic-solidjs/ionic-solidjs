// Auto-generated by scripts/generate.ts

import { defineCustomElement } from '@ionic/core/components/ion-modal'
import { fixProps } from '../../utils/fixProps'
import type { JSX as IonicJSX } from '@ionic/core'
import type { JSX as JSXBase } from 'solid-js'
import type { FixIonProps } from '../../lib'

defineCustomElement()

export type IonModalProps = FixIonProps<IonicJSX.IonModal> &
	JSXBase.HTMLAttributes<HTMLIonModalElement>

export function IonModal(props: IonModalProps) {
	const fixedProps = () => fixProps(props);
	//@ts-ignore
	return <ion-modal {...fixedProps()} />
}