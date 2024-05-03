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

const Tab1 = (props: { foo: string }) => {
	const [open, setOpen] = createSignal(false);
	const [text, setText] = createSignal('Button not used yet');

	createEffect(() => {
		console.log('open', open());
	});

	return (
		<>
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
		</>
	);
};

export default Tab1;
