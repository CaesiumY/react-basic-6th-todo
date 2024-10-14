import { addTodo, deleteTodo, toggleTodo } from "@/api/todo-api";
import { Todo } from "@/types/todo.types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Trash2 } from "lucide-react";
import { toast } from "sonner";

export const useAddTodoMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addTodo,
    onSuccess: () => {
      toast.success("할 일이 추가되었습니다.");

      queryClient.invalidateQueries({
        queryKey: ["todos"],
      });
    },
  });
};

export const useDeleteTodoMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteTodo,
    onSuccess: () => {
      toast("할 일이 삭제되었습니다.", {
        icon: <Trash2 size={18} />,
      });

      queryClient.invalidateQueries({
        queryKey: ["todos"],
      });
    },
  });
};

interface ToggleTodoMutationParams {
  id: Todo["id"];
  completed: boolean;
}

export const useToggleTodoMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, completed }: ToggleTodoMutationParams) =>
      toggleTodo(id, completed),
    onSuccess: () => {
      toast.info("할 일이 업데이트되었습니다.");

      queryClient.invalidateQueries({
        queryKey: ["todos"],
      });
    },
  });
};
