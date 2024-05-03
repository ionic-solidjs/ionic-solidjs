import type {JSX as IonicJSX} from '@ionic/core/dist/types/components';
import type { JSXBase } from '@ionic/core/dist/types/stencil-public-runtime';
import type { ParentProps } from 'solid-js';

type WithElementsAndChildren<T> = {
	[P in keyof T]?: ParentProps<T[P] & (P extends keyof HTMLElementTagNameMap ? JSXBase.HTMLAttributes<HTMLElementTagNameMap[P]> : {})>;
};

// Add the Ionic JSX namespace to the solid-js' JSX namespace
declare module 'solid-js' {
	export namespace JSX {
		interface IntrinsicElements extends WithElementsAndChildren<IonicJSX.IntrinsicElements> {
		}
	}
}

export * from './generated';
export * from './ComponentRef';
export * from './ion-icon';
export * from './ion-router';
export * from './ion-route';
