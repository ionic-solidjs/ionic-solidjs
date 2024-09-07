import {
	IonApp,
	IonRoute,
	IonRouteRedirect,
	IonRouter,
	IonRouterOutlet,
	setupIonicSolid,
} from '@ionic-solidjs/core';
import '@ionic-solidjs/ionicons';

// Core CSS required for Ionic components to work properly
import '@ionic/core/css/core.css';

// Basic CSS for apps built with Ionic
import '@ionic/core/css/normalize.css';
import '@ionic/core/css/structure.css';
import '@ionic/core/css/typography.css';

// Optional CSS utils that can be commented out
import '@ionic/core/css/padding.css';
import '@ionic/core/css/float-elements.css';
import '@ionic/core/css/text-alignment.css';
import '@ionic/core/css/text-transformation.css';
import '@ionic/core/css/flex-utils.css';
import '@ionic/core/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

// import '@ionic/core/css/palettes/dark.always.css';

/* Theme variables */
import './theme/variables.css';
import { Settings } from './pages/settings/Settings';
import { HomeRoutes } from './pages/home/HomeRoutes';
import { TestContext } from './TestContext';
import {createSignal} from "solid-js";

setupIonicSolid();

export function App() {
	const [foo, setFoo] = createSignal("bar");

	setTimeout(() => {
		setFoo("baz");
	}, 5000);

	return (
		<TestContext.Provider value={{ testProp: 'provided value' }}>
			<IonApp>
				<IonRouter useHash={false}>
					{/* Default route to Home */}
					<IonRouteRedirect from="/" to="/home/tab1" />

					{/* Home */}
					<HomeRoutes />

					{/* Settings */}
					<IonRoute url="/settings" component={Settings} componentProps={{ foo: foo() }} />
				</IonRouter>

				<IonRouterOutlet />
				{/*<Home/>*/}
			</IonApp>
		</TestContext.Provider>
	);
}
