import BrowserUserInfoCard from "@/components/auth/BrowswerUserInfoCard";
import UserInfoCard from "@/components/auth/UserInfoCard";
import MyTodoList from "@/components/todos/MyTodoList";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import React from "react";

const MyPage = async () => {
  const client = createClient();
  const { data } = await client.auth.getUser();
  const { user } = data;

  if (!user) {
    return redirect("/login");
  }

  const { data: profile } = await client
    .from("profiles")
    .select()
    .eq("id", user?.id)
    .single();

  if (!profile) {
    return redirect("/login");
  }

  return (
    <div className="min-h-screen flex items-center p-4 justify-center gap-4 flex-col">
      <UserInfoCard userId={user?.id} fullName={profile?.full_name ?? ""} />
      <BrowserUserInfoCard />
      <MyTodoList />
    </div>
  );
};

export default MyPage;
