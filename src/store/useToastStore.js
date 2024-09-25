import { create } from "zustand";

export const useToastStore = create((set) => ({
  toasts: [],
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
