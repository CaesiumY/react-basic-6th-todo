"use client";

import { useDeleteTodoMutation } from "@/query/useTodoMutation";
import { Todo } from "@/types/todo.types";
import Link from "next/link";

interface TodoItemProps {
  todo: Todo;
}

const TodoItem = ({ todo }: TodoItemProps) => {
  const { mutate: deleteTodo } = useDeleteTodoMutation();

  const { id, completed, title } = todo;

  return (
    <div>
      <Link href={`/todo/${todo.id}`}>{title}</Link>-{" "}
      {completed ? "완료됨" : "미완료"}
      <button onClick={() => deleteTodo(id)}>삭제</button>
    </div>
  );
};

export default TodoItem;
