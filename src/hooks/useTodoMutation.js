import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTodo, postTodo, toggleTodo } from "../api/todoClient";
import { useToast } from "./useToast";

export const useCreateTodoMutation = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: (todo) => postTodo(todo),
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
    mutationFn: (id) => deleteTodo(id),
    onSuccess: () => {
      toast("아이템이 삭제되었습니다.");

      queryClient.invalidateQueries({
        queryKey: ["todos"],
      });
    },
  });
};

export const useToggleTodoMutation = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: ({ id, completed }) => toggleTodo(id, completed),
    onSuccess: () => {
      toast("아이템이 수정되었습니다.");

      queryClient.invalidateQueries({
        queryKey: ["todos"],
      });
    },
  });
};
