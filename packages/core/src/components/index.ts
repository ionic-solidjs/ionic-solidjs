declare module 'solid-js' {
	export namespace JSX {
		interface IntrinsicElements {
			'ion-router': any;
			'ion-route': any;
			'ion-router-outlet': any;
			'ion-router-link': any;
		}
	}
}

export * from './generated';
export * from './ComponentRef';
export * from './ion-icon';
export * from './ion-router';
export * from './ion-route';
