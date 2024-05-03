type FixKey<TKey extends string> = TKey extends `onIon${infer TRest}`
  ? `on:ion${TRest}`
  : TKey;
  // : CamelToKebab<Key>;

// type CamelToKebab<S extends string> = S extends `${infer T}${infer U}`
//   ? U extends Uncapitalize<U>
//     ? `${Uncapitalize<T>}${CamelToKebab<U>}`
//     : `${Uncapitalize<T>}-${CamelToKebab<U>}`
//   : "";

export type FixIonProps<TIonComponent> = {
  [Field in keyof TIonComponent as FixKey<Field & string>]: TIonComponent[Field];
}/* & {
  [Field in keyof IonComponent as `attr:${Field & string}`]?: IonComponent[Field];
}*/;
