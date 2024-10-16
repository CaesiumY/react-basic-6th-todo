"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createClient } from "@/utils/supabase/client";
import { useQuery } from "@tanstack/react-query";

export default function BrowserUserInfoCard() {
  const { data } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const client = createClient();
      const { data } = await client.auth.getUser();
      const { user } = data;

      if (!user) {
        return null;
      }

      const { data: profile } = await client
        .from("profiles")
        .select()
        .eq("id", user?.id)
        .single();

      return profile;
    },
  });

  if (!data) {
    return <div>Loading...</div>;
  }

  const { full_name: fullName, id: userId } = data;

  return (
    <Card>
      <CardHeader>
        <CardTitle>User Info from Client</CardTitle>
        <CardDescription>
          Lipsum dolor sit amet, consectetur adipiscing elit
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6">
          <div className="grid gap-3">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              type="text"
              className="w-full"
              defaultValue={fullName ?? ""}
              readOnly
            />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="description">Description</Label>
            <p>{userId}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
