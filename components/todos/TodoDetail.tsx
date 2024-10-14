"use client";

import { useTodoDetailQuery } from "@/query/useTodoQuery";
import TodoItem from "./TodoItem";
import { Todo } from "@/types/todo.types";

interface TodoDetailProps {
  id: Todo["id"];
}

const TodoDetail = ({ id }: TodoDetailProps) => {
  const { data: todo } = useTodoDetailQuery(id);

  if (!todo) return <div>Todo Not Found</div>;

  return <TodoItem todo={todo} />;
};

export default TodoDetail;
