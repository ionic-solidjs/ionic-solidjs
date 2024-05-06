import {
	IonButton,
	IonButtons,
	IonContent,
	IonHeader,
	IonIcon,
	IonInput,
	IonItem,
	IonItemDivider,
	IonItemGroup,
	IonItemOption,
	IonItemOptions,
	IonItemSliding,
	IonLabel,
	IonList,
	IonTitle,
	IonToolbar,
	useRouter,
} from '@ionic-solidjs/core';
import { iconAddCircle, iconSettingsOutline } from '@ionic-solidjs/ionicons';
import type { InputInputEventDetail, IonInputCustomEvent } from '@ionic/core';
import { For, createSignal } from 'solid-js';
import type { AppModel } from '../app-model';
import { viewTransition } from '../lib';

export function MainScreen(props: { model: AppModel }) {
	const router = useRouter();
	const [text, setText] = createSignal('');

	console.log('Re-rendering main screen');
	console.log('Router', router);

	return (
		<>
			<IonHeader>
				<IonToolbar>
					<IonTitle style={{ color: '#F00' }}>Todo list</IonTitle>

					<IonButtons slot="primary">
						<IonButton onClick={() => router?.push('/settings')}>
							<IonIcon slot="icon-only" name={iconSettingsOutline} />
						</IonButton>
					</IonButtons>
				</IonToolbar>
			</IonHeader>
			<IonContent>
				<IonList>
					<IonItemGroup>
						<IonItemDivider>
							<IonLabel>NEW</IonLabel>
						</IonItemDivider>
						<IonItem>
							<IonInput
								on:ionInput={(e: IonInputCustomEvent<InputInputEventDetail>) =>
									setText(String(e.target.value || ''))
								}
								label="Todo text"
								labelPlacement="floating"
								type="text"
								placeholder="Buy milk"
								value={text()}
							/>
							<IonButton
								slot="end"
								style={{
									'--background': '#93e9be',
								}}
								onClick={() => {
									props.model.addTodo(text());
									setText('');
								}}
							>
								<IonIcon slot="icon-only" name={iconAddCircle} />
							</IonButton>
						</IonItem>
					</IonItemGroup>
					<IonItemGroup>
						<IonItemDivider>
							<IonLabel>TODO</IonLabel>
						</IonItemDivider>
						<For each={props.model.todosNotDone()}>
							{(tnd) => (
								<IonItemSliding>
									<IonItemOptions
										on:ionSwipe={() => viewTransition(() => props.model.markDone(tnd))}
										side="start"
									>
										<IonItemOption color="success" expandable>
											Done
										</IonItemOption>
									</IonItemOptions>
									<IonItem style={{ 'view-transition-name': tnd.text }}>
										<IonLabel>{tnd.text}</IonLabel>
									</IonItem>
								</IonItemSliding>
							)}
						</For>
					</IonItemGroup>
					<IonItemGroup>
						<IonItemDivider>
							<IonLabel>DONE</IonLabel>
						</IonItemDivider>
						<For each={props.model.todosDone()}>
							{(tnd) => (
								<IonItemSliding>
									<IonItem style={{ 'view-transition-name': tnd.text }}>
										<IonLabel style={{ 'text-decoration': 'line-through' }}>{tnd.text}</IonLabel>
									</IonItem>
									<IonItemOptions
										on:ionSwipe={() => viewTransition(() => props.model.markDone(tnd))}
										side="end"
									>
										<IonItemOption color="warning" expandable>
											Not done
										</IonItemOption>
									</IonItemOptions>
								</IonItemSliding>
							)}
						</For>
					</IonItemGroup>
				</IonList>
			</IonContent>
		</>
	);
}
