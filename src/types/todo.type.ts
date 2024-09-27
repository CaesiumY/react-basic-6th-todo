export interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

export type TodoFilter = "completed" | "pending";
