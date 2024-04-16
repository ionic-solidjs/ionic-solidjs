
// Auto-generated by scripts/generate.ts

import { defineCustomElement } from '@ionic/core/components/ion-datetime'
import { initialize } from '@ionic/core/components'
import { type JSX as IonicJSX } from '@ionic/core'
import { JSX as JSXBase } from 'solid-js'
import { FixIonProps } from '../lib'

initialize()
defineCustomElement()

export type IonDatetimeProps = FixIonProps<IonicJSX.IonDatetime> &
  JSXBase.HTMLAttributes<HTMLIonDatetimeElement>

export function IonDatetime(props: IonDatetimeProps) {
  //@ts-ignore
  return <ion-datetime {...props} />
}
