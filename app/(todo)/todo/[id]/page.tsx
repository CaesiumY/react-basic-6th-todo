import { getTodoDetail } from "@/api/todo-api";
import TodoDetail from "@/components/todos/TodoDetail";
import { Button } from "@/components/ui/button";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import Link from "next/link";

interface TodoDetailPageProps {
  params: {
    id: string;
  };
}

const TodoDetailPage = async ({ params }: TodoDetailPageProps) => {
  const id = params.id;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["todos", id],
    queryFn: () => getTodoDetail(id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="space-y-2">
        <TodoDetail id={id} />
        <div>
          <Link href={"/"}>
            <Button className="w-full">돌아가기</Button>
          </Link>
        </div>
      </div>
    </HydrationBoundary>
  );
};

export default TodoDetailPage;
