type FixKey<TKey extends string> = TKey extends `onIon${infer TRest}` ? `on:ion${TRest}` : TKey;

export type FixIonProps<TIonComponent> = {
	[Field in keyof TIonComponent as FixKey<Field & string>]: TIonComponent[Field];
};

type FixVanillaKey<TKey extends string> = TKey extends `onIon${infer TRest}`
	? `on:ion${TRest}`
	: CamelToKebab<TKey>;

type CamelToKebab<S extends string> = S extends `${infer T}${infer U}`
	? U extends Uncapitalize<U>
		? `${Uncapitalize<T>}${CamelToKebab<U>}`
		: `${Uncapitalize<T>}-${CamelToKebab<U>}`
	: '';

export type FixVanillaIonProps<TIonComponent> = {
	[Field in keyof TIonComponent as FixVanillaKey<Field & string>]?: TIonComponent[Field];
} & {
	[Field in keyof TIonComponent as `prop:${Field & string}`]?: TIonComponent[Field];
};
