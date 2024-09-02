import { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";
import { useParams } from "react-router-dom";
import TodoItem from "./TodoItem";

const TodoDetail = () => {
  const { todos } = useContext(TodoContext);
  const { id } = useParams();

  const todo = todos.find((todo) => todo.id === id);

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
