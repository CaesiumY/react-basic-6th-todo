import { useTodoFilteredQuery } from "../../hooks/useTodoQuery";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { data, isLoading, error } = useTodoFilteredQuery();

  if (isLoading) {
    return <section className="flex flex-col gap-4">Loading...</section>;
  }

  if (error) {
    return (
      <section className="flex flex-col gap-4">Error: {error.message}</section>
    );
  }

  return (
    <section className="flex flex-col gap-4">
      <div>
        <h1 className="text-2xl font-bold dark:text-white">Tasks</h1>
      </div>
      <ul className="flex flex-col gap-4">
        {data.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </section>
  );
};

export default TodoList;
