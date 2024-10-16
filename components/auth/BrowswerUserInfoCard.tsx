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
import { useProfileQuery } from "@/query/useProfileQuery";

interface BrowserUserInfoCardProps {
  userId: string;
}

export default function BrowserUserInfoCard({
  userId,
}: BrowserUserInfoCardProps) {
  const { data, isLoading } = useProfileQuery(userId);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>No data</div>;
  }

  const { full_name: fullName } = data;

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
