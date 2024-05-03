import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic-solidjs/core';
import ExploreContainer from '../../components/ExploreContainer';

export function Settings() {
	return (
		<>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Settings</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<ExploreContainer name="Settings page" />
			</IonContent>
		</>
	);
}
