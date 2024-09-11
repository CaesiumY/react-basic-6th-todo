import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { getTodos } from "../../api/todoClient";
import TodoItem from "./TodoItem";

const TodoList = () => {
  // const [searchParams] = useSearchParams();

  const { data, isLoading, error } = useQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
  });

  if (isLoading) {
    return <TaskSection>Loading...</TaskSection>;
  }

  if (error) {
    return <TaskSection>Error: {error.message}</TaskSection>;
  }

  return (
    <TaskSection>
      <TaskHeader>
        <h1>Tasks</h1>
      </TaskHeader>
      <TaskList>
        {data.map((todo) => (
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
