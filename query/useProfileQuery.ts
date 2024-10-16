import { getUserProfile } from "@/api/profile-api";
import { createClient } from "@/utils/supabase/client";
import { useQuery } from "@tanstack/react-query";

export const useProfileQuery = (userId: string) => {
  const client = createClient();

  return useQuery({
    queryKey: ["user", userId],
    queryFn: () => getUserProfile(client, userId),
  });
};
