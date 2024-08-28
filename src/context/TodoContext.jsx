import { createContext, useState } from "react";
import { SAMPLE_TODOS } from "../constants/sample-todos";

export const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState(SAMPLE_TODOS);

  const addTodos = (newTodoObj) => {
    setTodos([newTodoObj, ...todos]);
  };

  const toggleCompleted = (id) =>
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );

  const handleDelete = (id) =>
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));

  return (
    <TodoContext.Provider
      value={{ todos, addTodos, toggleCompleted, handleDelete }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
