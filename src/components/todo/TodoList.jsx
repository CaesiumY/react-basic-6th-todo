import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, toggleCompleted, handleDelete }) => {
  return (
    <TaskSection>
      <TaskHeader>
        <h1>Tasks</h1>
      </TaskHeader>
      <TaskList>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleCompleted={toggleCompleted}
            handleDelete={handleDelete}
          />
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
