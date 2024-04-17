import { For, children, createContext, createSignal } from "solid-js";
import { customElement, noShadowDOM } from "solid-element";
import { JSX as IonicJSX } from "@ionic/core";
import { JSX as SolidJSX } from "solid-js";

import { defineCustomElement as ionRouterDefine } from "@ionic/core/components/ion-router";
ionRouterDefine();

import { defineCustomElement as ionRouteDefine } from "@ionic/core/components/ion-route";

ionRouteDefine();

export interface RouterParameters<P extends RouteParameters<any>[]> {
  root?: string;
  useHash?: boolean;
  onIonRouteDidChange?: (e: Event) => void;
  onIonRouteWillChange?: (e: Event) => void;
  /**
   * A list of routes to install. Nesting is not supported at the moment
   */
  routes: P;
}
export interface RouteParameters<T> {
  /**
   * Url for the route. Matching is not supported at the moment
   */
  url?: string;
  /**
   * A Solid component to activate at this route
   */
  component: (props: T) => SolidJSX.Element;
  /**
   * Props to pass to the component
   */
  routeProps: T;
}

function SolidIonRouteAcceptor<P>(props: RouteParameters<P> & { router: HTMLIonRouterElement }) {
  // A shadow root prevents ion-modal from finding its trigger elements.
  noShadowDOM();

  return (
    <RouterContext.Provider value={props.router}>
      {props.component(props.routeProps)}
    </RouterContext.Provider>
  );
}

customElement(
  "solid-ion-route-acceptor",
  {
    url: "/404",
    component: () => <>404</>,
    routeProps: {},
    router: null as any,
  },
  SolidIonRouteAcceptor
);

declare module "solid-js" {
  export namespace JSX {
    interface IntrinsicElements {
      "ion-router": any;
      "ion-route": any;
      "ion-router-outlet": any;
      "ion-router-link": any;
    }
  }
}

/**
 * A context to get the instance of the router object.
 */
export let RouterContext = createContext<HTMLIonRouterElement>();

/**
 * A simplified Solid-compatible implementation of the ion-router webcomponent.
 * Make sure to also place an `<IonRouterOutlet>` on the same page as the router, otherwise
 * nothing will be shown.
 *
 * @param props Router configuration
 */
export function Router<R extends RouteParameters<any>[]>(props: RouterParameters<R>) {
  let [router, setRouter] = createSignal<HTMLIonRouterElement>();

  return (
    <ion-router
      class="hydrated"
      use-hash={true}
      ref={setRouter}
      root={props.root}
      on:ionRouteDidChange={props.onIonRouteDidChange}
      on:ionRouteWillChange={props.onIonRouteWillChange}
    >
      <For each={props.routes}>
        {(route) => (
          <ion-route
            attr:url={route.url}
            component="solid-ion-route-acceptor"
            component-props={{
              url: route.url,
              routeProps: route.routeProps,
              component: route.component,
              router: router(),
            }}
          ></ion-route>
        )}
      </For>
    </ion-router>
  );
}
