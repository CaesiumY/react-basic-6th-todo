import TodoItem from "./TodoItem";

const TodoList = ({ todos, onToggleCompleted, onDelete }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggleCompleted={onToggleCompleted}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};

export default TodoList;
