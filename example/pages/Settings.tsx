import {
	IonButton,
	IonButtons,
	IonContent,
	IonHeader,
	IonIcon,
	IonTitle,
	IonToolbar,
	RouterContext,
} from '@ionic-solidjs/core';
import { iconArrowBack } from '@ionic-solidjs/ionicons';
import { useContext } from 'solid-js';

export function SettingsScreen(props: { settingsStore: any }) {
	let router = useContext(RouterContext);
	return (
		<>
			<IonHeader>
				<IonToolbar>
					<IonTitle style={{ color: '#F00' }}>Todo list</IonTitle>

					<IonButtons slot="start">
						<IonButton onClick={() => router?.back()}>
							<IonIcon slot="icon-only" name={iconArrowBack} />
						</IonButton>
					</IonButtons>
				</IonToolbar>
			</IonHeader>
			<IonContent>TODO</IonContent>;
		</>
	);
}
