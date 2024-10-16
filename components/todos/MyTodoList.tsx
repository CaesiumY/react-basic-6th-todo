"use client";

import { useMyTodosQuery } from "@/query/useTodoQuery";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import TodoItem from "./TodoItem";

const MyTodoList = () => {
  const { data: todos, isLoading } = useMyTodosQuery();
  const [parent] = useAutoAnimate();

  if (isLoading) return <div>Loading...</div>;

  return (
    <ul className="flex flex-col gap-2 w-96" ref={parent}>
      {todos?.map((todo) => (
        <li key={todo.id}>
          <TodoItem todo={todo} />
        </li>
      ))}
    </ul>
  );
};

export default MyTodoList;
