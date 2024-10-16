import { SupabaseDatabase } from "@/types/todo.types";

export const getUserProfile = async (
  client: SupabaseDatabase,
  userId: string
) => {
  const { data, error } = await client
    .from("profiles")
    .select()
    .eq("id", userId)
    .single();

  if (error) {
    throw Error(error.message);
  }

  return data;
};
