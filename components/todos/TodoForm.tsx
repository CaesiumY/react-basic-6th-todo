"use client";

import { useAddTodoMutation } from "@/query/useTodoMutation";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { SendHorizontal } from "lucide-react";

const TodoForm = () => {
  const { mutateAsync: addTodo } = useAddTodoMutation();

  const onSubmitTodo = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const title = formData.get("title")?.toString().trim();

    if (!title) return;

    await addTodo(title);

    form.reset();
  };

  return (
    <form
      onSubmit={onSubmitTodo}
      className="flex flex-col gap-2 bg-[#f5f5f5] rounded-2xl p-4"
    >
      <Input
        type="text"
        name="title"
        placeholder="할 일을 입력하세요"
        className="bg-transparent border-none"
      />
      <div className="text-right">
        <Button type="submit" className="w-fit">
          <SendHorizontal size={16} className="mr-2" />
          추가
        </Button>
      </div>
    </form>
  );
};

export default TodoForm;
