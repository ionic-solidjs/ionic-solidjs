import type { ComponentOptions } from 'component-register/types/utils';
import { customElement, noShadowDOM } from 'solid-element';
import { createRoot, onCleanup, type Owner } from 'solid-js';

// Extend props with `componentOptions`.
export type RefComponentProps<P = {}> = P & {
	componentOptions: {
		element: ComponentOptions['element'];
	};
};

export type ComponentRefProps<TComponent extends (...args: any[]) => any> = {
	// The component to render
	component: TComponent;

	// Custom additional data
	data?: any;

	// Context owner
	owner: Owner;
} & (TComponent extends () => any
	? { componentProps?: never }
	: { componentProps: Parameters<TComponent>[0] });

export function ComponentRef<TComponent extends (...args: any) => any>(
	props: ComponentRefProps<TComponent>,
	options: ComponentOptions
) {
	// Required, because shadowDOM breaks several things.
	noShadowDOM();

	let disposeReferencedComponent: () => void;

	onCleanup(() => {
		disposeReferencedComponent?.();
	});

	// Create new root bound to captured owner. We could use just runWithOwner() to restore contexts,
	// but it will also override disposing -> onCleanup of children would not be called.
	// So we have to keep reactivity of this place in DOM but bound to owner context; that's what createRoot gives us.
	// We just have to dispose it manually.
	return createRoot((disposer) => {
		disposeReferencedComponent = disposer;
		return (
			<props.component
				componentOptions={{ element: options.element }}
				{...(props.componentProps ?? {})}
			/>
		);
	}, props.owner);
}

export const ComponentRefElementName = 'solid-ion-component-ref';

customElement(
	ComponentRefElementName,
	{
		component: () => <></>,
		componentProps: undefined,
		data: undefined,
		owner: {
			owned: null,
			cleanups: null,
			owner: null,
			context: null,
		},
	},
	ComponentRef
);
