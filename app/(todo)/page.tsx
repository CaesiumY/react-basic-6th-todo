import { getTodos } from "@/api/todo-api";
import AvatarMenu from "@/components/auth/AvatarMenu";
import { DarkModeToggle } from "@/components/DarkModeToggle";
import TodoController from "@/components/todos/TodoController";
import TodoForm from "@/components/todos/TodoForm";

import TodoList from "@/components/todos/TodoList";
import { Separator } from "@/components/ui/separator";
import { createClient } from "@/utils/supabase/server";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

const TodoPage = async () => {
  const serverClient = createClient();
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["todos", undefined],
    queryFn: () => getTodos(serverClient),
  });

  await queryClient.prefetchQuery({
    queryKey: ["todos", "pending"],
    queryFn: () => getTodos(serverClient, "pending"),
  });

  await queryClient.prefetchQuery({
    queryKey: ["todos", "completed"],
    queryFn: () => getTodos(serverClient, "completed"),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="flex flex-col gap-12">
        <section className="flex flex-row justify-between">
          <h1 className="font-black text-4xl">TODO LIST</h1>
          <div className="space-x-2">
            <AvatarMenu />
            <DarkModeToggle />
          </div>
        </section>

        <Separator />

        <div className="space-y-4">
          <TodoController />
          <TodoList />
        </div>
        <TodoForm />
      </div>
    </HydrationBoundary>
  );
};

export default TodoPage;
