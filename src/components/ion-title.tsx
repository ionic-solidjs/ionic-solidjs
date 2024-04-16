
// Auto-generated by scripts/generate.ts

import { defineCustomElement } from '@ionic/core/components/ion-title'
import { initialize } from '@ionic/core/components'
import { type JSX as IonicJSX } from '@ionic/core'
import { JSX as JSXBase } from 'solid-js'
import { FixIonProps } from '../lib'

import { template as _$template } from "solid-js/web";
import { getOwner as _$getOwner } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";

initialize()
defineCustomElement()

export type IonTitleProps = FixIonProps<IonicJSX.IonTitle> &
  JSXBase.HTMLAttributes<HTMLIonTitleElement>


let _tmpl$ = /* @__PURE__ */ _$template(`<ion-title>`, true, false);

export function IonTitle(props: IonTitleProps) {
  let _el$ = _tmpl$();
  _$spread(_el$, props, false, false);
  (_el$ as any)._$owner = _$getOwner();
  return _el$;
}

