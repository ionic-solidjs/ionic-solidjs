
// Auto-generated by scripts/generate.ts

import { defineCustomElement } from '@ionic/core/components/ion-back-button'
import { initialize } from '@ionic/core/components'
import { type JSX as IonicJSX } from '@ionic/core'
import { JSX as JSXBase } from 'solid-js'
import { FixIonProps } from '../lib'

import { template as _$template } from "solid-js/web";
import { getOwner as _$getOwner } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";

initialize()
defineCustomElement()

export type IonBackButtonProps = FixIonProps<IonicJSX.IonBackButton> &
  JSXBase.HTMLAttributes<HTMLIonBackButtonElement>


let _tmpl$ = /* @__PURE__ */ _$template(`<ion-back-button>`, true, false);

export function IonBackButton(props: IonBackButtonProps) {
  let _el$ = _tmpl$();
  _$spread(_el$, props, false, false);
  (_el$ as any)._$owner = _$getOwner();
  return _el$;
}

