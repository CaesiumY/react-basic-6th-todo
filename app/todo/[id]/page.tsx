import { getTodoDetail } from "@/api/todo-api";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import React from "react";

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
      <div>TodoDetailPage</div>
    </HydrationBoundary>
  );
};

export default TodoDetailPage;
