import { useState } from "react";
import { TODO_SAMPLE } from "../constants/todo-sample";

const TodoContainer = () => {
  const [todos, setTodos] = useState(TODO_SAMPLE); // 할 일 목록을 저장할 상태

  const [text, setText] = useState(""); // input 태그의 값을 저장할 상태

  const onSubmit = (e) => {
    e.preventDefault(); // 이벤트의 기본 동작을 막는다.

    // 새로운 todo 객체 생성
    const newTodo = {
      id: crypto.randomUUID(), // 랜덤한 id 생성
      text, // text: text와 같은 의미
      isCompleted: false, // 할 일 완료 여부
    };

    // 새로운 todo 객체를 todos 배열에 추가
    setTodos([newTodo, ...todos]);

    // input 태그의 값을 초기화 -> 정리
    setText("");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <button type="submit">추가</button>
      </form>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}-{todo.isCompleted ? "완료" : "미완료"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoContainer;
