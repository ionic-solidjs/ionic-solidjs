import {
	IonAlert,
	IonButton,
	IonContent,
	IonHeader,
	IonText,
	IonTitle,
	IonToolbar,
} from '@ionic-solidjs/core';
import './Tab1.css';
import { createEffect, createSignal } from 'solid-js';

export function Tab1(props: { foo: string }) {
	const [open, setOpen] = createSignal(false);
	const [text, setText] = createSignal('Button not used yet');

	createEffect(() => {
		console.log('open', open());
	});

	return (
		<>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Tab 1</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<IonHeader collapse="condense">
					<IonToolbar>
						<IonTitle size="large">Tab 2</IonTitle>
					</IonToolbar>
				</IonHeader>

				<IonButton
					onClick={() => {
						setOpen(true);
						setText('Button has been used');
					}}
				>
					Show Alert
				</IonButton>

				<IonText innerText={text()} />

				<IonAlert
					isOpen={open()}
					header={'Header'}
					subHeader="Subheader"
					on:ionAlertDidDismiss={() => setOpen(false)}
				/>
			</IonContent>
		</>
	);
}
