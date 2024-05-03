import {
	IonApp,
	IonIcon,
	IonLabel,
	IonRoute,
	IonRouteRedirect,
	IonRouter,
	IonRouterOutlet,
	IonTabBar,
	IonTabButton,
	IonTabs,
	setupIonicSolid,
} from '@ionic-solidjs/core';
// import { ellipse, square, triangle } from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';

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

setupIonicSolid();

export function App() {
	return (
		<IonApp>
			<IonRouter useHash={false}>
				<IonRouteRedirect from="/" to="/tab1" />
				<IonRoute url="/tab1" component={Tab1} componentProps={{ foo: 'test' }} />
				<IonRoute url="/tab2" component={Tab2} />
				<IonRoute url="/tab3" component={Tab3} />
			</IonRouter>

			<IonRouterOutlet />

			{/*<IonTabs>*/}
			{/*	<IonTabBar slot="bottom">*/}
			{/*		<IonTabButton tab="tab1" href="/tab1">*/}
			{/*			<IonIcon aria-hidden="true" icon={triangle} />*/}
			{/*			<IonLabel>Tab 1</IonLabel>*/}
			{/*		</IonTabButton>*/}
			{/*		<IonTabButton tab="tab2" href="/tab2">*/}
			{/*			<IonIcon aria-hidden="true" icon={ellipse} />*/}
			{/*			<IonLabel>Tab 2</IonLabel>*/}
			{/*		</IonTabButton>*/}
			{/*		<IonTabButton tab="tab3" href="/tab3">*/}
			{/*			<IonIcon aria-hidden="true" icon={square} />*/}
			{/*			<IonLabel>Tab 3</IonLabel>*/}
			{/*		</IonTabButton>*/}
			{/*	</IonTabBar>*/}
			{/*</IonTabs>*/}
		</IonApp>
	);
}
