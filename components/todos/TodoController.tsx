"use client";

import React, { useId } from "react";
import { Switch } from "../ui/switch";
import { Label } from "../ui/label";
import { useTodoStore } from "@/store/useTodoStore";

const TodoController = () => {
  const completedSwitchId = useId();
  const { completed, toggleCompleted } = useTodoStore();

  return (
    <div className="flex flex-row justify-between px-4">
      <p>0/4</p>
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
