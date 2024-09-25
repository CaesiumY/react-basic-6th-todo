import { useToastStore } from "../store/useToastStore";

export const useToast = () => {
  const { toasts, addToast, removeToast } = useToastStore();

  return {
    toast: addToast,
    toasts,
    removeToast,
  };
};
