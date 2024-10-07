import { getTodos } from "@/api/todo-api";
import TodoController from "@/components/todos/TodoController";
import TodoForm from "@/components/todos/TodoForm";

import TodoList from "@/components/todos/TodoList";
import { Separator } from "@/components/ui/separator";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

const TodoPage = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["todos", "pending"],
    queryFn: () => getTodos("pending"),
  });

  await queryClient.prefetchQuery({
    queryKey: ["todos", "completed"],
    queryFn: () => getTodos("completed"),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="flex flex-col gap-12">
        <section>
          <h1 className="font-black text-4xl">TODO LIST</h1>
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
