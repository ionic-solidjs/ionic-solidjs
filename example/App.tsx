import { IonApp, IonRoute, IonRouter, IonRouterOutlet, setupIonicSolid } from '@ionic-solidjs/core';
import type { AppModel } from './app-model';
import { MainScreen } from './pages/Main';
import { SettingsScreen } from './pages/Settings';

setupIonicSolid({});

export function App(props: { model: AppModel }) {
	console.log('Re rendering app');
	return (
		<IonApp>
			<IonRouter>
				<IonRoute
					url="/settings"
					component={SettingsScreen}
					componentProps={{
						settingsStore: props.model.settingsStore,
					}}
				/>
				<IonRoute url="/" component={MainScreen} componentProps={props} />
			</IonRouter>
			<IonRouterOutlet />
		</IonApp>
	);
}
