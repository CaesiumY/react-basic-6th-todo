import { useState } from "react";
import { SAMPLE_TODOS } from "../../constants/sample-todos";
import TodoForm from "./TodoForm";

const TodoContainer = () => {
  const [todos, setTodos] = useState(SAMPLE_TODOS);

  const addTodos = (newTodoObj) => setTodos([newTodoObj, ...todos]);

  const toggleCompleted = (id) =>
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );

  const handleDelete = (id) =>
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));

  return (
    <div>
      <TodoForm addTodos={addTodos} />

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <p
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.text} -{" "}
              {todo.completed ? <span>완료됨</span> : <span>미완료</span>}
            </p>
            <button onClick={() => toggleCompleted(todo.id)}>
              {todo.completed ? "취소" : "완료"}
            </button>
            <button onClick={() => handleDelete(todo.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoContainer;
