"use client";

import { useTodoQuery } from "@/query/useTodoQuery";
import TodoItem from "./TodoItem";
import { useTodoStore } from "@/store/useTodoStore";

const TodoList = () => {
  const { completed } = useTodoStore();
  const { data: todos, isLoading } = useTodoQuery(
    completed ? "completed" : "pending"
  );

  if (isLoading) return <div>Loading...</div>;

  return (
    <ul className="flex flex-col gap-2">
      {todos?.map((todo) => (
        <li key={todo.id}>
          <TodoItem todo={todo} />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
