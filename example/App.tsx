import { IonApp, IonRouterOutlet, setupIonicSolid } from '@ionic-solidjs/core';
import { Router } from '@ionic-solidjs/router';
import type { AppModel } from './app-model';
import { MainScreen } from './pages/Main';
import { SettingsScreen } from './pages/Settings';

setupIonicSolid({
	mode: 'ios',
});

export function App(props: { model: AppModel }) {
	console.log('Re rendering app');
	return (
		<IonApp>
			<Router
				useHash={false}
				routes={[
					{
						url: '/settings',
						component: SettingsScreen,
						componentProps: {
							settings: props.model.settingsStore,
						},
					},
					{
						url: '/',
						component: MainScreen,
						componentProps: props,
					},
				]}
			></Router>
			<IonRouterOutlet />
		</IonApp>
	);
}
