
// Auto-generated by scripts/generate.ts

import { defineCustomElement } from '@ionic/core/components/ion-loading'
import { initialize } from '@ionic/core/components'
import { type JSX as IonicJSX } from '@ionic/core'
import { JSX as JSXBase } from 'solid-js'
import { FixIonProps } from '../lib'

initialize()
defineCustomElement()

export type IonLoadingProps = FixIonProps<IonicJSX.IonLoading> &
  JSXBase.HTMLAttributes<HTMLIonLoadingElement>

export function IonLoading(props: IonLoadingProps) {
  //@ts-ignore
  return <ion-loading {...props} />
}
