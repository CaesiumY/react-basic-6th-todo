import { getTodoDetail } from "@/api/todo-api";
import React from "react";

interface TodoDetailPageProps {
  params: {
    id: string;
  };
}

const TodoDetailPage = async ({ params }: TodoDetailPageProps) => {
  const id = params.id;
  const { completed, text } = await getTodoDetail(id);

  return (
    <div>
      TodoDetailPage {text} - {completed ? "완료됨" : "미완료"}
    </div>
  );
};

export default TodoDetailPage;
