import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic-solidjs/core';
import ExploreContainer from '../../../components/ExploreContainer';
import './Tab2.css';

export function Tab2() {
	return (
		<>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Tab 2</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<IonHeader collapse="condense">
					<IonToolbar>
						<IonTitle size="large">Tab 2</IonTitle>
					</IonToolbar>
				</IonHeader>
				<ExploreContainer name="Tab 2 page" />
			</IonContent>
		</>
	);
}
