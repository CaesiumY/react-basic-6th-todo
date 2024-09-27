import { useQuery } from "@tanstack/react-query";
import { getTodoDetail, getTodos } from "../api/todoClient";
import { useGetFilter } from "./useGetFilter";
import { Todo, TodoFilter } from "../types/todo.type";

export const useTodoFilteredQuery = () => {
  const { filter } = useGetFilter();

  return useQuery({
    queryKey: ["todos", filter],
    queryFn: () => getTodos(filter),
  });
};

export const useTodoQuery = (filter: TodoFilter) => {
  return useQuery({
    queryKey: ["todos", filter],
    queryFn: () => getTodos(filter),
  });
};

export const useTodoDetailQuery = (id: Todo["id"]) => {
  return useQuery({
    queryKey: ["todos", id],
    queryFn: () => getTodoDetail(id),
  });
};
