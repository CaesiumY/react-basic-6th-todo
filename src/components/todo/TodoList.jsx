import styled from "styled-components";
import TodoItem from "./TodoItem";
import { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";
import { useSearchParams } from "react-router-dom";

const TodoList = () => {
  const { todos, completedTodos, pendingTodos } = useContext(TodoContext);
  const [searchParams] = useSearchParams();

  const getFilteredTodos = () => {
    const filter = searchParams.get("filter");

    if (filter === "completed") {
      return completedTodos;
    } else if (filter === "pending") {
      return pendingTodos;
    }
    return todos;
  };

  const filteredTodos = getFilteredTodos();

  return (
    <TaskSection>
      <TaskHeader>
        <h1>Tasks</h1>
      </TaskHeader>
      <TaskList>
        {filteredTodos.map((todo) => (
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
