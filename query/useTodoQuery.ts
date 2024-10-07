import { getTodos } from "@/api/todo-api";
import { useQuery } from "@tanstack/react-query";

export const useTodoQuery = (filter?: "completed" | "pending") => {
  return useQuery({
    queryKey: ["todos", filter],
    queryFn: () => getTodos(filter),
  });
};
