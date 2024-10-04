import { getTodos } from "@/api/todo-api";
import TodoForm from "@/components/todos/TodoForm";
import TodoList from "@/components/todos/TodoList";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

const TodoPage = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="flex flex-col gap-12">
        <section>
          <h1 className="font-black text-4xl">TODO LIST</h1>
        </section>

        <TodoList />
        {/* <TodoForm /> */}
      </div>
    </HydrationBoundary>
  );
};

export default TodoPage;
