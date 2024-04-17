/* @refresh reload */

declare global {
  interface Document {
    startViewTransition(callback: () => void): void;
  }
}

import "./ionic-css";

import { render } from "solid-js/web";
import { App } from "./App";
import { appModel } from "./app-model";

render(() => <App model={appModel} />, document.getElementById("root") as HTMLElement);
