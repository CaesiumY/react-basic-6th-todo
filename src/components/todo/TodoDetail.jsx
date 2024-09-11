import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TodoItem from "./TodoItem";

const TodoDetail = () => {
  const [todo, setTodo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const data = await fetchTodo(id);
      setTodo(data);
      setIsLoading(false);
    };

    fetchData();
  }, [fetchTodo, id]);

  if (isLoading) {
    return <section>Loading...</section>;
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
