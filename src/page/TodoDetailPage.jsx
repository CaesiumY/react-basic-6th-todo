import { Link, useParams } from "react-router-dom";
import TodoDetail from "../components/todo/TodoDetail";
import styled from "styled-components";

const TodoDetailPage = () => {
  const { id } = useParams();

  return (
    <div>
      <TodoDetail id={id} />

      <Link to="/">
        <ToListButton>목록으로</ToListButton>
      </Link>
    </div>
  );
};

export default TodoDetailPage;

const ToListButton = styled.button`
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.5rem;
  background-color: #000000;
  color: #ffffff;
  font-size: 1rem;
  width: 100%;
  text-align: center;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;
