import { useState } from "react";

const SAMPLE_TODOS = [
  { id: 1, text: "Buy milk" },
  { id: 2, text: "Clean the house" },
  { id: 3, text: "Go for a run" },
  { id: 4, text: "Finish homework" },
  { id: 5, text: "Call mom" },
  { id: 6, text: "Buy groceries" },
  { id: 7, text: "Walk the dog" },
  { id: 8, text: "Read a book" },
  { id: 9, text: "Do laundry" },
  { id: 10, text: "Write code" },
];

const TodoList = () => {
  const [todos, setTodos] = useState(SAMPLE_TODOS);
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!newTodo.trim()) {
      return;
    }

    setTodos([{ id: crypto.randomUUID(), text: newTodo }, ...todos]);

    setNewTodo("");
  };

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="todo"
          value={newTodo}
          onChange={handleInputChange}
        />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
