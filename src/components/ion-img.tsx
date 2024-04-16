
// Auto-generated by scripts/generate.ts

import { defineCustomElement } from '@ionic/core/components/ion-img'
import { initialize } from '@ionic/core/components'
import { type JSX as IonicJSX } from '@ionic/core'
import { JSX as JSXBase } from 'solid-js'
import { FixIonEventCasing } from '../lib'

initialize()
defineCustomElement()

export type IonImgProps = FixIonEventCasing<IonicJSX.IonImg> &
  JSXBase.HTMLAttributes<HTMLIonImgElement>

export function IonImg(props: IonImgProps) {
  //@ts-ignore
  return <ion-img {...props} />
}