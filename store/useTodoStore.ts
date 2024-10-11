import { create } from "zustand";
import { createJSONStorage, persist, StateStorage } from "zustand/middleware";

const hashStorage: StateStorage = {
  getItem: (key): string => {
    const searchParams = new URLSearchParams(location.hash.slice(1));
    const storedValue = searchParams.get(key) ?? "";
    return JSON.parse(storedValue);
  },
  setItem: (key, newValue): void => {
    const searchParams = new URLSearchParams(location.hash.slice(1));
    searchParams.set(key, JSON.stringify(newValue));
    location.hash = searchParams.toString();
  },
  removeItem: (key): void => {
    const searchParams = new URLSearchParams(location.hash.slice(1));
    searchParams.delete(key);
    location.hash = searchParams.toString();
  },
};

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
      storage: createJSONStorage(() => hashStorage),
    }
  )
);
