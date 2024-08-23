const TodoItem = ({ todo, toggleCompleted, handleDelete }) => {
  return (
    <li key={todo.id}>
      <p
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
        }}
      >
        {todo.text} -{" "}
        {todo.completed ? <span>완료됨</span> : <span>미완료</span>}
      </p>
      <button onClick={() => toggleCompleted(todo.id)}>
        {todo.completed ? "취소" : "완료"}
      </button>
      <button onClick={() => handleDelete(todo.id)}>삭제</button>
    </li>
  );
};

export default TodoItem;
