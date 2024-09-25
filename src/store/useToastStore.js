import { create } from "zustand";

export const useToastStore = create((set) => ({
  toasts: [
    {
      id: crypto.randomUUID(),
      content: "hello world!!! 1",
    },
    {
      id: crypto.randomUUID(),
      content: "hello 2",
    },
  ],
  addToast: (content) => {
    const newToast = {
      id: crypto.randomUUID(),
      content,
    };

    set((prevState) => ({
      toasts: [...prevState.toasts, newToast],
    }));
  },
  removeToast: (id) =>
    set((prevState) => ({
      toasts: prevState.toasts.filter((toastItem) => toastItem.id !== id),
    })),
}));
