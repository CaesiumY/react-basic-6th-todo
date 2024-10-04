import { getTodoDetail } from "@/api/todo-api";
import TodoItem from "@/components/todos/TodoItem";
import { Todo } from "@/types/todo.types";
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

  const todo = queryClient.getQueryData<Todo>(["todos", id]);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      {todo ? <TodoItem todo={todo} /> : <div>Todo not found</div>}
    </HydrationBoundary>
  );
};

export default TodoDetailPage;
