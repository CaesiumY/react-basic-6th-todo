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

interface UserInfoCardProps {
  userId: string;
  fullName: string;
}

export default function UserInfoCard({ userId, fullName }: UserInfoCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>User Info from Server</CardTitle>
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
              defaultValue={fullName}
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
