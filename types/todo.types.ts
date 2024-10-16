import { Database, Tables } from "@/database.types";
import type { SupabaseClient } from "@supabase/supabase-js";

export type SupabaseDatabase = SupabaseClient<Database>;

export type Todo = Tables<"todos">;
export type Profile = Tables<"profiles">;

export interface TodoWithAuthor extends Omit<Todo, "author"> {
  author: Profile;
}
