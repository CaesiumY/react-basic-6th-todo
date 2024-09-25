import { useToast } from "../hooks/useToast";

const Toaster = () => {
  const { toasts } = useToast();

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
