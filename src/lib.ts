type FixKey<Key extends string> = Key extends `onIon${infer Rest}`
  ? `on:ion${Rest}`
  : CamelToKebab<Key>;

type CamelToKebab<S extends string> = S extends `${infer T}${infer U}`
  ? U extends Uncapitalize<U>
    ? `${Uncapitalize<T>}${CamelToKebab<U>}`
    : `${Uncapitalize<T>}-${CamelToKebab<U>}`
  : "";

export type FixIonEventCasing<IonComponent> = {
  [Field in keyof IonComponent as FixKey<Field & string>]: IonComponent[Field];
} & {
  [Field in keyof IonComponent as `attr:${Field & string}`]?: IonComponent[Field];
};
