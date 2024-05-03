import type { JSX as IonicJSX } from 'ionicons/dist/types/components';
import type { JSX as JSXBase } from 'solid-js';

// `tsup` removes an alias of first JSX import (IonicJSX) and uses only the JSX identifier
// which makes problem when it's used directly in the 'solid-js' module.
type __$IonIconsJSXIntrinsicElements = IonicJSX.IntrinsicElements;

type WithElements<T> = {
	[P in keyof T]?: T[P] &
		(P extends keyof HTMLElementTagNameMap ? JSXBase.HTMLAttributes<HTMLElementTagNameMap[P]> : {});
};

// Add the Ionic JSX namespace to the solid-js' JSX namespace
declare module 'solid-js' {
	export namespace JSX {
		interface IntrinsicElements extends WithElements<__$IonIconsJSXIntrinsicElements> {}
	}
}

export * from './icons';
