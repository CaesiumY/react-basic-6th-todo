"use client";

import React, { useId } from "react";
import { Switch } from "../ui/switch";
import { Label } from "../ui/label";
import { useTodoStore } from "@/store/useTodoStore";
import { useTodoQuery } from "@/query/useTodoQuery";

const TodoController = () => {
  const completedSwitchId = useId();
  const { completed, toggleCompleted } = useTodoStore();

  const { data: allTodos } = useTodoQuery();
  const { data: completedTodos } = useTodoQuery("completed");

  return (
    <div className="flex flex-row justify-between px-4">
      <p>
        {completedTodos?.length}/{allTodos?.length}
      </p>
      <div className="flex items-center space-x-2">
        <Switch
          id={completedSwitchId}
          checked={completed}
          onCheckedChange={(checked) => toggleCompleted(checked)}
        />
        <Label htmlFor={completedSwitchId}>COMPLETED</Label>
      </div>
    </div>
  );
};

export default TodoController;
