const TodoItem = ({ todo, onToggleCompleted, onDelete }) => {
  return (
    <li key={todo.id}>
      {todo.text}-{todo.isCompleted ? "완료" : "미완료"}
      <button onClick={() => onToggleCompleted(todo.id)}>
        {todo.isCompleted ? "취소" : "완료"}
      </button>
      <button onClick={() => onDelete(todo.id)}>삭제</button>
    </li>
  );
};

export default TodoItem;
