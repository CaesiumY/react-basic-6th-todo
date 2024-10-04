"use client";

import { getTodos } from "@/api/todo-api";
import { useQuery } from "@tanstack/react-query";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { data: todos, isLoading } = useQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
  });

  if (isLoading) return <div>Loading...</div>;

  return (
    <ul>
      {todos?.map((todo) => (
        <li key={todo.id}>
          <TodoItem todo={todo} />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
