
// Auto-generated by scripts/generate.ts

import { defineCustomElement } from '@ionic/core/components/ion-range'
import { initialize } from '@ionic/core/components'
import { type JSX as IonicJSX } from '@ionic/core'
import { JSX as JSXBase } from 'solid-js'
import { FixIonProps } from '../lib'

initialize()
defineCustomElement()

export type IonRangeProps = FixIonProps<IonicJSX.IonRange> &
  JSXBase.HTMLAttributes<HTMLIonRangeElement>

export function IonRange(props: IonRangeProps) {
  //@ts-ignore
  return <ion-range {...props} />
}
