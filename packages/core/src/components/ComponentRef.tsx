import type { ComponentOptions } from 'component-register/types/utils';
import { customElement } from 'solid-element';
import { mergeProps } from 'solid-js';

// Extend props with `componentOptions`.
export type RefComponentProps<P = {}> = P & {
    componentOptions: {
        element: ComponentOptions["element"];
    };
};

export type ComponentRefProps<TComponent extends (...args: any[]) => any> = {
    // The component to render
    component: TComponent;

    // Custom additional data
    data?: any;
} & (TComponent extends () => any ? { componentProps?: never } : { componentProps: Parameters<TComponent>[0] });

export function ComponentRef<TComponent extends (...args: any) => any>(
    props: ComponentRefProps<TComponent>,
    options: ComponentOptions
) {
    const mergedProps = mergeProps(props.componentProps ?? {}, {componentOptions: {element: options.element}} satisfies RefComponentProps);
    return <>{props.component(mergedProps)}</>;
}

export const ComponentRefElementName = 'solid-ion-component-ref';

customElement(
    ComponentRefElementName,
    {
        component: () => <></>,
        componentProps: undefined,
        data: undefined
    },
    ComponentRef
);
