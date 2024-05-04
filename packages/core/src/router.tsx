// import {For, children, createContext, createSignal, ParentProps, useContext} from "solid-js";
// import {customElement, noShadowDOM} from "solid-element";
// import {JSX as IonicJSX} from "@ionic/core";
// import {JSX as SolidJSX} from "solid-js";
//
// import {defineCustomElement as ionRouterDefine} from "@ionic/core/components/ion-router";
//
// ionRouterDefine();
//
// import {defineCustomElement as ionRouteDefine} from "@ionic/core/components/ion-route";
// import {ComponentOptions} from "component-register/types/utils";
// // import {IonRouteProps} from "./components";
// import type {JSX} from "solid-js/types/jsx";
//
// ionRouteDefine();
//
// // export interface RouterParameters<P extends RouteParameters<any>[]> {
// //     root?: string;
// //     useHash?: boolean;
// //     onIonRouteDidChange?: (e: Event) => void;
// //     onIonRouteWillChange?: (e: Event) => void;
// //     /**
// //      * A list of routes to install. Nesting is not supported at the moment
// //      */
// //     routes: P;
// // }
//
// // export interface RouteParameters<T> {
// //     /**
// //      * Url for the route. Matching is not supported at the moment
// //      */
// //     url?: string;
// //     /**
// //      * A Solid component to activate at this route
// //      */
// //     component: (props: T) => SolidJSX.Element;
// //     /**
// //      * Props to pass to the component
// //      */
// //     routeProps: T;
// // }
// //
// // function SolidIonRouteAcceptor<P>(props: RouteParameters<P>, {element}: ComponentOptions) {
// //     /*
// //      * A shadow root prevents ion-modal from finding its trigger elements.
// //      * `noShadowDOM()` - is not working; it fails because it's not able to find the element.
// //      * TODO: Why is this required here? Is is required? Should we force no shadow DOM? Shouldn't it be configurable?
// //      */
// //     Object.defineProperty(element, "renderRoot", {
// //         value: element,
// //     });
// //
// //     return (
// //         <>{props.component(props.routeProps)}</>
// //     );
// // }
// //
// // customElement(
// //     "solid-ion-route-acceptor",
// //     {
// //         url: "/404",
// //         component: () => <>404</>,
// //         routeProps: {}
// //     },
// //     SolidIonRouteAcceptor
// // );
// //
// // declare module "solid-js" {
// //     export namespace JSX {
// //         interface IntrinsicElements {
// //             "ion-router": any;
// //             "ion-route": any;
// //             "ion-router-outlet": any;
// //             "ion-router-link": any;
// //         }
// //     }
// // }
// //
// // /**
// //  * A context to get the instance of the router object.
// //  */
// // export let RouterContext = createContext<HTMLIonRouterElement>();
// //
// // /**
// //  * Hook to access ion-router element.
// //  */
// // export function useRouter() {
// //     return useContext(RouterContext);
// // }
// //
// // /**
// //  * A simplified Solid-compatible implementation of the ion-router webcomponent.
// //  * Make sure to also place an `<IonRouterOutlet>` on the same page as the router, otherwise
// //  * nothing will be shown.
// //  *
// //  * @param props Router configuration
// //  */
// // export function IonSolidRouter<R extends RouteParameters<any>[]>(props: ParentProps<RouterParameters<R>>) {
// //     let [router, setRouter] = createSignal<HTMLIonRouterElement>();
// //
// //     return (
// //         <ion-router
// //             use-hash={props.useHash}
// //             ref={setRouter}
// //             root={props.root}
// //             on:ionRouteDidChange={props.onIonRouteDidChange}
// //             on:ionRouteWillChange={props.onIonRouteWillChange}
// //         >
// //             <RouterContext.Provider value={router()}>
// //                 <For each={props.routes}>
// //                     {(route) => (
// //                         <ion-route
// //                             attr:url={route.url}
// //                             component="solid-ion-route-acceptor"
// //                             component-props={{
// //                                 routeProps: route.routeProps,
// //                                 component: route.component
// //                             }}
// //                         ></ion-route>
// //                     )}
// //                 </For>
// //                 {props.children}
// //             </RouterContext.Provider>
// //         </ion-router>
// //     );
// // }
//
// type RouteProps<TProps = void> = Omit<IonicJSX.IonRoute, "component" | "componentProps"> & {
//     component: (props: TProps) => JSX.Element;
// } & (TProps extends void ? { componentProps?: {} } : { componentProps: TProps; });
//
// export function IonSolidRoute<TComponentProps>(props: RouteProps<TComponentProps>) {
//     return <ion-route
//         attr:url={props.url}
//         component="solid-ion-route-acceptor"
//         component-props={{
//             routeProps: props.componentProps ?? {},
//             component: props.component
//         }}
//         on:beforeEnter={props.beforeEnter}
//         on:beforeLeave={props.beforeLeave}
//     ></ion-route>
// }
