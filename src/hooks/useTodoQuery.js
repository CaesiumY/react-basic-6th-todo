import { useQuery } from "@tanstack/react-query";
import { getTodoDetail, getTodos } from "../api/todoClient";
import { useGetFilter } from "./useGetFilter";

export const useTodoFilteredQuery = () => {
  const { filter } = useGetFilter();

  return useQuery({
    queryKey: ["todos", filter],
    queryFn: () => getTodos(filter),
  });
};

export const useTodoQuery = (filter) => {
  return useQuery({
    queryKey: ["todos", filter],
    queryFn: () => getTodos(filter),
  });
};

export const useTodoDetailQuery = (id) => {
  return useQuery({
    queryKey: ["todos", id],
    queryFn: () => getTodoDetail(id),
  });
};
