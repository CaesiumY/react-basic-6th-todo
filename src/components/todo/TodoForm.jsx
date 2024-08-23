import { useState } from "react";

const TodoForm = ({ addTodos }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!newTodo.trim()) {
      return;
    }

    const newTodoObj = {
      id: crypto.randomUUID(),
      text: newTodo,
      completed: false,
    };

    addTodos(newTodoObj);

    setNewTodo("");
  };

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="todo"
        value={newTodo}
        onChange={handleInputChange}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;
