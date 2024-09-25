import { useEffect } from "react";
import { useToast } from "../hooks/useToast";

const Toaster = () => {
  const { toasts, removeToast } = useToast();

  useEffect(() => {
    if (toasts.length === 0) return;

    const targetToastId = toasts[0].id;

    const timer = setTimeout(() => {
      removeToast(targetToastId);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [toasts, removeToast]);

  return (
    <section className="fixed z-20 right-4 bottom-24">
      <ul className="flex flex-col gap-4">
        {toasts.map((toast) => (
          <li
            key={toast.id}
            className="bg-white p-4 rounded-lg shadow-md min-w-56"
          >
            <p>{toast.content}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Toaster;
