import { Home } from './Home';
import { IonRoute } from '@ionic-solidjs/core';

export function HomeRoutes() {
	return (
		<IonRoute url="/home" component={Home}>
			<IonRoute component={Home} />
			<IonRoute url="/tab1" component="tab1" />
			<IonRoute url="/tab2" component="tab2" />
			<IonRoute url="/tab3" component="tab3" />
		</IonRoute>
	);
}
