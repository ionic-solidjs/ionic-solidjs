import { createMemo } from "solid-js";
import { createMutable, createStore } from "solid-js/store";

export type TodoItem = {
  id: number;
  text: string;
  done: boolean;
};

export interface AppModel {
  settingsStore: {
    theme: "light" | "dark";
  };
  todos: TodoItem[];

  todosDone(): TodoItem[];
  todosNotDone(): TodoItem[];

  addTodo(text: string): void;
  markDone(todo: TodoItem): void;
}

export function createModel(): AppModel {
  let [todos, setTodos] = createStore([] as TodoItem[]);
  let [settingsStore, setSettingsStore] = createStore({
    theme: "light" as const,
  });
  let todosDone = createMemo(() => todos.filter((t) => t.done));
  let todosNotDone = createMemo(() => todos.filter((t) => !t.done));
  function addTodo(text: string) {
    setTodos([...todos, { id: todos.length, text, done: false }]);
  }
  function markDone(todo: TodoItem) {
    setTodos(
      todos.map((t) => {
        if (t === todo) {
          return { ...t, done: !t.done };
        }
        return t;
      })
    );
  }
  return {
    settingsStore,
    todos,
    todosDone,
    todosNotDone,
    addTodo,
    markDone,
  };
}
export let appModel: AppModel = createModel();
