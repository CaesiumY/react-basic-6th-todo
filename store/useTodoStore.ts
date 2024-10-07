import { create } from "zustand";
import { persist } from "zustand/middleware";

interface TodoStore {
  completed: boolean;
  toggleCompleted: (completed: boolean) => void;
}

export const useTodoStore = create<TodoStore>()(
  persist(
    (set) => ({
      completed: false,
      toggleCompleted: (completed) => set({ completed }),
    }),
    {
      name: "todo-store",
    }
  )
);
