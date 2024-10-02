import TodoForm from "@/components/todos/TodoForm";
import TodoList from "@/components/todos/TodoList";

const RootPage = () => {
  return (
    <main>
      <TodoForm />
      <TodoList />
    </main>
  );
};

export default RootPage;
