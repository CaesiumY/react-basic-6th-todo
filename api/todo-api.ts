import { SupabaseDatabase, Todo } from "@/types/todo.types";
import { createClient } from "@/utils/supabase/client";

export const getTodos = async (
  client: SupabaseDatabase,
  filter?: "completed" | "pending"
) => {
  const { data, error } = await client
    .from("todos")
    .select()
    .eq("completed", filter === "completed");

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
    .select()
    .eq("id", id)
    .single();

  if (error) {
    throw Error(error.message);
  }

  return data;
};

export const addTodo = async (title: string) => {
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
