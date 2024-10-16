import { getUserTodos, getTodoDetail, getTodos } from "@/api/todo-api";
import { Profile, Todo } from "@/types/todo.types";
import { createClient } from "@/utils/supabase/client";
import { useQuery } from "@tanstack/react-query";

export const useTodoQuery = (filter?: "completed" | "pending") => {
  const browserClient = createClient();

  return useQuery({
    queryKey: ["todos", filter],
    queryFn: () => getTodos(browserClient, filter),
  });
};

export const useTodoDetailQuery = (id: Todo["id"]) => {
  const browserClient = createClient();

  return useQuery({
    queryKey: ["todos", id],
    queryFn: () => getTodoDetail(browserClient, id),
  });
};

export const useUserTodoQuery = (userId: Profile["id"]) => {
  const browserClient = createClient();

  return useQuery({
    queryKey: ["todos", userId],
    queryFn: () => getUserTodos(browserClient, userId),
  });
};
