import { Link, useParams } from "react-router-dom";
import TodoDetail from "../components/todo/TodoDetail";

const TodoDetailPage = () => {
  const { id } = useParams();

  return (
    <div>
      <TodoDetail id={id} />

      <Link to="/">
        <button className="mt-4 px-4 py-2 border-none rounded-lg bg-black text-white text-base w-full text-center cursor-pointer hover:opacity-70">
          목록으로
        </button>
      </Link>
    </div>
  );
};

export default TodoDetailPage;
