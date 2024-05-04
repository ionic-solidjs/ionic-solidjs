import { IonIcon, IonLabel, IonTab, IonTabBar, IonTabButton, IonTabs } from '@ionic-solidjs/core';
import { ellipse, square, triangle } from 'ionicons/icons';
import { Tab1 } from './tabs/Tab1';
import { Tab2 } from './tabs/Tab2';
import { Tab3 } from './tabs/Tab3';

export function Home(...args: any[]) {
	return (
		<>
			<IonTabs>
				<IonTab tab="tab1">
					<Tab1 foo="Test" />
				</IonTab>

				<IonTab tab="tab2">
					<Tab2 />
				</IonTab>

				<IonTab tab="tab3">
					<Tab3 />
				</IonTab>

				<IonTabBar slot="bottom">
					<IonTabButton tab="tab1" href="/home/tab1">
						<IonIcon aria-hidden="true" icon={triangle} />
						<IonLabel>Tab 1</IonLabel>
					</IonTabButton>

					<IonTabButton tab="tab2" href="/home/tab2">
						<IonIcon aria-hidden="true" icon={ellipse} />
						<IonLabel>Tab 2</IonLabel>
					</IonTabButton>

					<IonTabButton tab="tab3" href="/home/tab3">
						<IonIcon aria-hidden="true" icon={square} />
						<IonLabel>Tab 3</IonLabel>
					</IonTabButton>
				</IonTabBar>
			</IonTabs>
		</>
	);
}
