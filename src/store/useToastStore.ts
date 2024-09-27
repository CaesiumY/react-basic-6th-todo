import { create } from "zustand";

interface Toast {
  id: string;
  content: string;
}

interface ToastStore {
  toasts: Toast[];
  addToast: (content: string) => void;
  removeToast: (id: string) => void;
}

export const useToastStore = create<ToastStore>((set) => ({
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
