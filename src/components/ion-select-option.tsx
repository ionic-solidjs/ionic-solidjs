
// Auto-generated by scripts/generate.ts

import { defineCustomElement } from '@ionic/core/components/ion-select-option'
import { initialize } from '@ionic/core/components'
import { type JSX as IonicJSX } from '@ionic/core'
import { JSX as JSXBase } from 'solid-js'
import { FixIonProps } from '../lib'

import { template as _$template } from "solid-js/web";
import { getOwner as _$getOwner } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";

initialize()
defineCustomElement()

export type IonSelectOptionProps = FixIonProps<IonicJSX.IonSelectOption> &
  JSXBase.HTMLAttributes<HTMLIonSelectOptionElement>


let _tmpl$ = /* @__PURE__ */ _$template(`<ion-select-option>`, true, false);

export function IonSelectOption(props: IonSelectOptionProps) {
  let _el$ = _tmpl$();
  _$spread(_el$, props, false, false);
  (_el$ as any)._$owner = _$getOwner();
  return _el$;
}

