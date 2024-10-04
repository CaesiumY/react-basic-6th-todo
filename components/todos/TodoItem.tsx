"use client";

import {
  useDeleteTodoMutation,
  useToggleTodoMutation,
} from "@/query/useTodoMutation";
import { Todo } from "@/types/todo.types";
import Link from "next/link";
import { Button } from "../ui/button";

interface TodoItemProps {
  todo: Todo;
}

const TodoItem = ({ todo }: TodoItemProps) => {
  const { mutate: deleteTodo } = useDeleteTodoMutation();
  const { mutate: toggleTodo } = useToggleTodoMutation();

  const { id, completed, title } = todo;

  return (
    <div className="flex flex-row justify-between items-center rounded-2xl bg-[#f5f5f5] p-4 hover:bg-[#ebebeb]">
      <Link className="hover:underline" href={`/todo/${todo.id}`}>
        {title}
      </Link>
      <div className="flex flex-row gap-2">
        <Button variant="destructive" onClick={() => deleteTodo(id)}>
          삭제
        </Button>
        <Button onClick={() => toggleTodo({ id, completed: !completed })}>
          {completed ? "완료됨" : "미완료"}
        </Button>
      </div>
    </div>
  );
};

export default TodoItem;
