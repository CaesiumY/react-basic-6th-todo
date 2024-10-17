import { getUserProfile } from "@/api/profile-api";
import BrowserUserInfoCard from "@/components/auth/BrowserUserInfoCard";
import UserInfoCard from "@/components/auth/UserInfoCard";
import UserTodoList from "@/components/todos/UserTodoList";
import { Button } from "@/components/ui/button";
import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

const MyPage = async () => {
  const client = createClient();
  const {
    data: { user },
  } = await client.auth.getUser();

  if (!user) {
    return redirect("/login");
  }

  const profile = await getUserProfile(client, user?.id);

  return (
    <div className="min-h-screen">
      <div className="flex p-4 justify-center gap-4 flex-col max-w-[768px] mx-auto">
        <UserInfoCard userId={user?.id} fullName={profile?.full_name ?? ""} />
        <BrowserUserInfoCard userId={user.id} />
        <UserTodoList userId={user.id} />
        <Link href={"/"}>
          <Button className="w-full">돌아가기</Button>
        </Link>
      </div>
    </div>
  );
};

export default MyPage;
