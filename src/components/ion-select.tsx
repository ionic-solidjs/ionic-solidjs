
// Auto-generated by scripts/generate.ts

import { defineCustomElement } from '@ionic/core/components/ion-select'
import { initialize } from '@ionic/core/components'
import { type JSX as IonicJSX } from '@ionic/core'
import { JSX as JSXBase } from 'solid-js'
import { FixIonProps } from '../lib'

import { template as _$template } from "solid-js/web";
import { getOwner as _$getOwner } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";

initialize()
defineCustomElement()

export type IonSelectProps = FixIonProps<IonicJSX.IonSelect> &
  JSXBase.HTMLAttributes<HTMLIonSelectElement>


let _tmpl$ = /* @__PURE__ */ _$template(`<ion-select>`, true, false);

export function IonSelect(props: IonSelectProps) {
  let _el$ = _tmpl$();
  _$spread(_el$, props, false, false);
  (_el$ as any)._$owner = _$getOwner();
  return _el$;
}

