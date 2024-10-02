"use client";

import { getTodoDetail } from "@/api/todo-api";
import { useQuery } from "@tanstack/react-query";
import React from "react";

interface TodoItemProps {
  id: string;
}

const TodoItem = ({ id }: TodoItemProps) => {
  const { data: todo } = useQuery({
    queryKey: ["todos", id],
    queryFn: () => getTodoDetail(id),
  });

  return (
    <div>
      {todo?.title} - {todo?.completed ? "완료됨" : "미완료"}
    </div>
  );
};

export default TodoItem;
