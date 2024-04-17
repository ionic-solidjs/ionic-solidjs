import { IonApp, IonRouterOutlet, Router } from "ionic-solidjs";

import { MainScreen } from "./pages/Main";
import { SettingsScreen } from "./pages/Settings";
import { AppModel } from "./app-model";

export function App(props: { model: AppModel }) {
  console.log("Re rendering app");
  return (
    <IonApp>
      <Router
        routes={[
          {
            url: "/",
            routeProps: props,
            component: MainScreen,
          },
          {
            url: "/settings",
            component: SettingsScreen,
            routeProps: {
              settings: props.model.settingsStore,
            },
          },
        ]}
      ></Router>
      <IonRouterOutlet class="hydrated" />
    </IonApp>
  );
}
