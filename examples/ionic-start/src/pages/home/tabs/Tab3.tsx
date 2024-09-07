import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic-solidjs/core';
import ExploreContainer from '../../../components/ExploreContainer';
import './Tab3.css';

export function Tab3() {
	return (
		<>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Tab 3</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<ExploreContainer name="Tab 3 page" />
			</IonContent>
		</>
	);
}
