import styled from "styled-components";
import TodoItem from "./TodoItem";
import { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";

const TodoList = () => {
  const { todos } = useContext(TodoContext);

  return (
    <TaskSection>
      <TaskHeader>
        <h1>Tasks</h1>
      </TaskHeader>
      <TaskList>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </TaskList>
    </TaskSection>
  );
};

export default TodoList;

const TaskSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const TaskHeader = styled.div`
  h1 {
    font-size: 1.5rem;
    font-weight: bold;
  }
`;

const TaskList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
