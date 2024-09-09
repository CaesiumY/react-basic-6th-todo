import { useContext } from "react";
import styled from "styled-components";
import { TodoContext } from "../../context/TodoContext";
import { Link } from "react-router-dom";

const TodoItem = ({ todo }) => {
  const { toggleCompleted, handleDelete } = useContext(TodoContext);

  return (
    <TaskItem key={todo.id}>
      <TaskItemContent>
        <p
          style={{
            textDecoration: todo.completed ? "line-through" : "none",
          }}
        >
          <TaskLink to={`/${todo.id}`}>{todo.text}</TaskLink> -{" "}
          {todo.completed ? <span>완료됨</span> : <span>미완료</span>}
        </p>
      </TaskItemContent>

      <TaskItemActions>
        <TaskItemActionButton
          onClick={() => toggleCompleted(todo.id, !todo.completed)}
          color="#582be7"
        >
          {todo.completed ? "취소" : "완료"}
        </TaskItemActionButton>
        <TaskItemActionButton
          onClick={() => handleDelete(todo.id)}
          color="#f05656"
        >
          삭제
        </TaskItemActionButton>
      </TaskItemActions>
    </TaskItem>
  );
};

export default TodoItem;

const TaskItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 1rem;
  border-radius: 1rem;
  background-color: #ffffff;
`;

const TaskItemContent = styled.div``;

const TaskItemActions = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
  justify-content: center;
`;

export const TaskItemActionButton = styled.button`
  color: #ffffff;
  background-color: ${({ color }) => color};

  padding: 0.5rem 1rem;
  border-radius: 0.5rem;

  cursor: pointer;

  &:hover {
    opacity: 80%;
  }
`;

const TaskLink = styled(Link)`
  &:hover {
    text-decoration: underline;
  }
`;
