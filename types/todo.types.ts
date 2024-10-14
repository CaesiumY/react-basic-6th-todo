import { Database, Tables } from "@/database.types";
import type { SupabaseClient } from "@supabase/supabase-js";

export type SupabaseDatabase = SupabaseClient<Database>;

export type Todo = Tables<"todos">;
