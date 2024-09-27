import TodoDashboard from "./TodoDashboard";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoContainer = () => {
  return (
    <div className="flex flex-col gap-12">
      <TodoDashboard />
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default TodoContainer;
