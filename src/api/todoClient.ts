import axios from "axios";
import { Todo, TodoFilter } from "../types/todo.type";

export const todoClient = axios.create({
  baseURL: "http://localhost:3000/todos",
});

export const getTodos = async (filter: TodoFilter | null) => {
  const searchParams = new URLSearchParams();

  if (filter === "completed") {
    searchParams.append("completed", "true");
  }

  if (filter === "pending") {
    searchParams.append("completed", "false");
  }

  const { data } = await todoClient.get<Todo[]>(`?${searchParams.toString()}`);

  return data;
};

export const getTodoDetail = async (id: Todo["id"]) => {
  const { data } = await todoClient.get<Todo>(`/${id}`);

  return data;
};

export const postTodo = async (newTodoObj: Omit<Todo, "id">) => {
  const { data } = await todoClient.post<Todo>("/", newTodoObj);

  return data;
};

export const toggleTodo = async (
  id: Todo["id"],
  completed: Todo["completed"]
) => {
  const { data } = await todoClient.patch<Todo>(`/${id}`, {
    completed,
  });

  return data;
};

export const deleteTodo = async (id: Todo["id"]) => {
  const { data } = await todoClient.delete<Todo>(`/${id}`);

  return data;
};
