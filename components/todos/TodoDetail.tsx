"use client";

import { useTodoDetailQuery } from "@/query/useTodoQuery";
import TodoItem from "./TodoItem";

interface TodoDetailProps {
  id: string;
}

const TodoDetail = ({ id }: TodoDetailProps) => {
  const { data: todo } = useTodoDetailQuery(id);

  if (!todo) return <div>Todo Not Found</div>;

  return <TodoItem todo={todo} />;
};

export default TodoDetail;
