import { useToast } from "../hooks/useToast";

const Toaster = () => {
  const { toasts } = useToast();

  return (
    <section>
      <ul>
        {toasts.map((toast) => (
          <li key={toast.id}>
            <p>{toast.content}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Toaster;
