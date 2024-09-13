import { useTodoDetailQuery } from "../../hooks/useTodoQuery";
import TodoItem from "./TodoItem";

const TodoDetail = ({ id }) => {
  const { data: todo, isLoading, error } = useTodoDetailQuery(id);

  if (isLoading) {
    return <section>Loading...</section>;
  }

  if (error) {
    return <section>Error: {error.message}</section>;
  }

  if (!todo) {
    return <section>404 Not Found Todo!</section>;
  }

  return (
    <section>
      <TodoItem todo={todo} />
    </section>
  );
};

export default TodoDetail;
