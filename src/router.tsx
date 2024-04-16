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
  routes: P;
}
export interface RouteParameters<T> {
  url?: string;
  component: (props: T) => SolidJSX.Element;
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

export let RouterContext = createContext<HTMLIonRouterElement>();

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
