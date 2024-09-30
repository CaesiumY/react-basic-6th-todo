import { getTodos } from "@/api/todo-api";
import Link from "next/link";

const TodoList = async () => {
  const todos = await getTodos();

  return (
    <ul>
      {todos.map(({ id, completed, text }) => (
        <li key={id}>
          <Link href={`/todo/${id}`}>
            {text} - {completed ? "완료됨" : "미완료"}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
