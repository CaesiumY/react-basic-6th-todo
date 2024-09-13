import { useState } from "react";
import styled from "styled-components";
import { useCreateTodoMutation } from "../../hooks/useTodoMutation";
import { TaskItemActionButton } from "./TodoItem";

const TodoForm = () => {
  const [newTodo, setNewTodo] = useState("");
  const { mutate } = useCreateTodoMutation();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!newTodo.trim()) {
      return;
    }

    const newTodoObj = {
      text: newTodo,
      completed: false,
    };

    mutate(newTodoObj);

    setNewTodo("");
  };

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  return (
    <TaskForm onSubmit={handleSubmit}>
      <TaskInput
        type="text"
        name="todo"
        value={newTodo}
        onChange={handleInputChange}
      />
      <TaskSubmitButton type="submit" color="#582be7">
        추가하기
      </TaskSubmitButton>
    </TaskForm>
  );
};

export default TodoForm;

const TaskForm = styled.form`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

const TaskInput = styled.input`
  flex: 1;
  padding: 0.5rem;
  border: 2px solid black;
  border-radius: 0.5rem;
  outline: none;
  font-size: 1rem;
  color: #333333;
  background-color: #ffffff;
  transition: border-color 0.3s;

  &:focus {
    border-color: #582be7;
  }
`;

const TaskSubmitButton = styled(TaskItemActionButton)``;
