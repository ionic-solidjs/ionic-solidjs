import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic-solidjs/core';
import ExploreContainer from '../../components/ExploreContainer';
import {createEffect, onCleanup, useContext} from "solid-js";
import {TestContext} from "../../TestContext";

export function Settings(props: { foo: string }) {
	const testContext = useContext(TestContext)
	console.log("Settings testContext:", testContext, "props:", Object.entries(props));

	createEffect(() => {
		console.log("props.foo changed to:", props.foo);
	});

	onCleanup(() => {
		console.log("Settings cleanup");
	});

	return (
		<>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Settings - TestContext value: {testContext.testProp}</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<ExploreContainer name="Settings page" />
			</IonContent>
		</>
	);
}
