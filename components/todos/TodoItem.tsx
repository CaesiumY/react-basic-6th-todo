"use client";

import { useToggleTodoMutation } from "@/query/useTodoMutation";
import { Todo } from "@/types/todo.types";
import Link from "next/link";
import { Checkbox } from "../ui/checkbox";
import TodoDeleteButton from "./TodoDeleteButton";

interface TodoItemProps {
  todo: Todo;
}

const TodoItem = ({ todo }: TodoItemProps) => {
  const { mutate: toggleTodo } = useToggleTodoMutation();

  const { id, completed, title } = todo;

  return (
    <div className="flex flex-row justify-between items-center rounded-2xl bg-[#f5f5f5] p-4 hover:bg-[#ebebeb]">
      <div className="flex flex-row items-center gap-2">
        <Checkbox
          checked={completed}
          onCheckedChange={(checked) =>
            checked !== "indeterminate" &&
            toggleTodo({
              id,
              completed: checked,
            })
          }
        />

        <Link
          className="hover:underline dark:text-black"
          href={`/todo/${todo.id}`}
        >
          {title}
        </Link>
      </div>

      <div className="flex flex-row gap-2">
        <TodoDeleteButton id={id} />
      </div>
    </div>
  );
};

export default TodoItem;
