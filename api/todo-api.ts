import { Todo } from "@/types/todo.types";

export const getTodos = async () => {
  const response = await fetch("http://localhost:3000/todos", {
    cache: "no-store",
  });
  const todos: Todo[] = await response.json();

  return todos;
};

export const getTodoDetail = async (id: string) => {
  const response = await fetch(`http://localhost:3000/todos/${id}`, {
    cache: "no-store",
  });
  const todo: Todo = await response.json();

  return todo;
};

export const addTodo = async (title: string) => {
  const response = await fetch("http://localhost:3000/todos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, completed: false }),
  });

  const todo: Todo = await response.json();

  return todo;
};
