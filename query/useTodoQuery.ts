import { getTodos } from "@/api/todo-api";
import { useQuery } from "@tanstack/react-query";

export const useTodoQuery = () => {
  return useQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
  });
};
