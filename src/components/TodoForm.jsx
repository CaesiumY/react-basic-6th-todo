import { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";

const TodoForm = () => {
  const { addTodo } = useContext(TodoContext);
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault(); // 이벤트의 기본 동작을 막는다.

    // 새로운 todo 객체 생성
    const newTodo = {
      id: crypto.randomUUID(), // 랜덤한 id 생성
      text, // text: text와 같은 의미
      isCompleted: false, // 할 일 완료 여부
    };

    // 새로운 todo 객체를 todos 배열에 추가
    addTodo(newTodo);

    // input 태그의 값을 초기화 -> 정리
    setText("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <button type="submit">추가</button>
    </form>
  );
};

export default TodoForm;
