import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTodo, postTodo, toggleTodo } from "../api/todoClient";
import { useToast } from "./useToast";
import { Todo } from "../types/todo.type";

export const useCreateTodoMutation = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: (todo: Omit<Todo, "id">) => postTodo(todo),
    onSuccess: () => {
      toast("아이템이 추가되었습니다.");

      queryClient.invalidateQueries({
        queryKey: ["todos"],
      });
    },
  });
};

export const useDeleteTodoMutation = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: (id: Todo["id"]) => deleteTodo(id),
    onSuccess: () => {
      toast("아이템이 삭제되었습니다.");

      queryClient.invalidateQueries({
        queryKey: ["todos"],
      });
    },
  });
};

interface ToggleTodoMutationParams {
  id: Todo["id"];
  completed: Todo["completed"];
}

export const useToggleTodoMutation = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: ({ id, completed }: ToggleTodoMutationParams) =>
      toggleTodo(id, completed),
    onSuccess: () => {
      toast("아이템이 수정되었습니다.");

      queryClient.invalidateQueries({
        queryKey: ["todos"],
      });
    },
  });
};
