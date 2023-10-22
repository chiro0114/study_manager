import { create } from "zustand";

type Todo = {
  id: string;
  type: string;
};

type TodosType = {
  todos: Todo[] | null;
  initTodos: (uid: string) => void;
  addTodo: (addTargetTodo: Todo) => void;
};

export const useTodos = create<TodosType>((set, get) => ({
  todos: null,
  initTodos: (uid) => {
    set((state) => ({
      ...state,
      todos: [
        {
          id: "",
          type: "",
        },
      ],
    }));
  },
  addTodo: (addTargetTodo) => {
    // const {todos} = get();
    // if (!todos) return;
    // const newTodos = [...todos,todos[addTargetTodo.type]]
    //   set((state) => ({
    //     todos: [...state.todos],
    //   }));
  },
}));
