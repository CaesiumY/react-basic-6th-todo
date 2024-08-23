import TodoItem from "./TodoItem";

const TodoList = ({ todos, toggleCompleted, handleDelete }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleCompleted={toggleCompleted}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  );
};

export default TodoList;
