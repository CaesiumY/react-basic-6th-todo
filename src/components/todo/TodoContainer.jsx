import { useState } from "react";
import { SAMPLE_TODOS } from "../../constants/sample-todos";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoDashboard from "./TodoDashboard";
import styled from "styled-components";

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
    <TodoContainerWrapper>
      <TodoDashboard all={todos.length} completed={6} pending={13} />
      {/* <TodoForm addTodos={addTodos} /> */}

      <TodoList
        todos={todos}
        toggleCompleted={toggleCompleted}
        handleDelete={handleDelete}
      />
    </TodoContainerWrapper>
  );
};

export default TodoContainer;

const TodoContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;
