import { For, createSignal, useContext } from "solid-js";
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
  IonModal,
  IonTitle,
  IonToolbar,
  RouterContext,
} from "ionic-solidjs";
import { AppModel } from "../app-model";
import { iconAddCircle, iconSettingsOutline } from "ionic-solidjs/icons";
import { viewTransition } from "../lib";

export function MainScreen(props: { model: AppModel }) {
  let router = useContext(RouterContext);

  let [text, setText] = createSignal("");

  console.log("Re-rendering main screen");
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Todo list</IonTitle>

          <IonButtons slot="primary">
            <IonButton onclick={() => router?.push("/settings")}>
              <IonIcon slot="icon-only" name={iconSettingsOutline}></IonIcon>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList can-swipe="true">
          <IonItemGroup>
            <IonItemDivider>
              <IonLabel>NEW</IonLabel>
            </IonItemDivider>
            <IonItem>
              <IonInput
                on:ionInput={(e) => setText(String(e.target.value || ""))}
                label="Todo text"
                label-placement="floating"
                type="text"
                placeholder="Buy milk"
                value={text()}
              />
              <IonButton
                slot="end"
                onclick={() => {
                  console.log("Why you no work");
                  props.model.addTodo(text());
                  setText("");
                }}
              >
                <IonIcon slot="icon-only" name={iconAddCircle}></IonIcon>
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
                  <IonItem style={{ "view-transition-name": tnd.text }}>
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
                  <IonItem style={{ "view-transition-name": tnd.text }}>
                    <IonLabel style={{ "text-decoration": "line-through" }}>{tnd.text}</IonLabel>
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
