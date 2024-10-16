import {
  Profile,
  SupabaseDatabase,
  Todo,
  TodoWithAuthor,
} from "@/types/todo.types";
import { createClient } from "@/utils/supabase/client";

export const getTodos = async (
  client: SupabaseDatabase,
  filter?: "completed" | "pending"
) => {
  const { data, error } = await client
    .from("todos")
    .select(`*, author(*)`)
    .eq("completed", filter === "completed")
    .returns<TodoWithAuthor[]>();

  if (error) {
    throw Error(error.message);
  }

  return data;
};

export const getTodoDetail = async (
  client: SupabaseDatabase,
  id: Todo["id"]
) => {
  const { data, error } = await client
    .from("todos")
    .select(`*, author(*)`)
    .eq("id", id)
    .single<TodoWithAuthor>();

  if (error) {
    throw Error(error.message);
  }

  return data;
};

export const getUserTodos = async (
  client: SupabaseDatabase,
  userId: Profile["id"]
) => {
  const { data, error } = await client
    .from("todos")
    .select(`*, author(*)`)
    .eq("author", userId)
    .returns<TodoWithAuthor[]>();

  if (error) {
    throw Error(error.message);
  }

  return data;
};

export const addTodo = async (title: Todo["title"]) => {
  const client = createClient();

  const { data, error } = await client.from("todos").insert({ title });

  if (error) {
    throw Error(error.message);
  }

  return data;
};

export const deleteTodo = async (id: Todo["id"]) => {
  const client = createClient();

  const { data, error } = await client.from("todos").delete().eq("id", id);

  if (error) {
    throw Error(error.message);
  }

  return data;
};

export const toggleTodo = async (id: Todo["id"], completed: boolean) => {
  const client = createClient();

  const { data, error } = await client
    .from("todos")
    .update({ completed })
    .eq("id", id);

  if (error) {
    throw Error(error.message);
  }

  return data;
};
