"use client";

import { addTodo } from "@/api/todo-api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const TodoForm = () => {
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation({
    mutationFn: addTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["todos"],
      });
    },
  });

  const onSubmitTodo = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const title = formData.get("title")?.toString().trim();

    if (!title) return;

    await mutateAsync(title);

    (e.target as HTMLFormElement).reset();
  };

  return (
    <form onSubmit={onSubmitTodo}>
      <input type="text" name="title" placeholder="할 일을 입력하세요" />
      <button type="submit">추가</button>
    </form>
  );
};

export default TodoForm;
