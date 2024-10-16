"use client";

import { useAutoAnimate } from "@formkit/auto-animate/react";
import TodoItem from "./TodoItem";
import { useUserTodoQuery } from "@/query/useTodoQuery";

interface UserTodoListProps {
  userId: string;
}

const UserTodoList = ({ userId }: UserTodoListProps) => {
  const { data: todos, isLoading } = useUserTodoQuery(userId);
  const [parent] = useAutoAnimate();

  if (isLoading) return <div>Loading...</div>;

  return (
    <ul className="flex flex-col gap-2" ref={parent}>
      {todos?.map((todo) => (
        <li key={todo.id}>
          <TodoItem todo={todo} />
        </li>
      ))}
    </ul>
  );
};

export default UserTodoList;
