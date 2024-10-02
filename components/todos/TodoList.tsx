"use client";

import { getTodos } from "@/api/todo-api";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

const TodoList = () => {
  const { data: todos, isLoading } = useQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
  });

  if (isLoading) return <div>Loading...</div>;

  return (
    <ul>
      {todos?.map(({ id, completed, title }) => (
        <li key={id}>
          <Link href={`/todo/${id}`}>
            {title} - {completed ? "완료됨" : "미완료"}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
