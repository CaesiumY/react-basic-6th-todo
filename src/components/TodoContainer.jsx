import { useState } from "react";
import { TODO_SAMPLE } from "../constants/todo-sample";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

const TodoContainer = () => {
  const [todos, setTodos] = useState(TODO_SAMPLE); // 할 일 목록을 저장할 상태

  const addTodo = (todo) => {
    setTodos([todo, ...todos]);
  };

  const onToggleCompleted = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          isCompleted: !todo.isCompleted,
        };
      }

      return todo;
    });

    setTodos(newTodos);
  };

  const onDelete = (id) => {
    const filteredTodos = todos.filter((todo) => {
      if (todo.id === id) {
        return false;
      }

      return true;
    });

    setTodos(filteredTodos);
  };

  return (
    <div>
      <TodoForm addTodo={addTodo} />

      <TodoList
        todos={todos}
        onToggleCompleted={onToggleCompleted}
        onDelete={onDelete}
      />
    </div>
  );
};

export default TodoContainer;
