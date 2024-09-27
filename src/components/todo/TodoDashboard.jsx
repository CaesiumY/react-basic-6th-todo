import { ClipboardCheck, Ellipsis, Monitor, Video } from "lucide-react";
import { Link } from "react-router-dom";
import { useGetFilter } from "../../hooks/useGetFilter";
import { useTodoQuery } from "../../hooks/useTodoQuery";

const TodoDashboard = () => {
  const { filter } = useGetFilter();

  const { data: allTodos } = useTodoQuery();
  const { data: completedTodos } = useTodoQuery("completed");
  const { data: pendingTodos } = useTodoQuery("pending");

  return (
    <section className="flex flex-col gap-4">
      <div>
        <h1 className="text-2xl font-bold dark:text-white">Dashboard</h1>
      </div>

      <div className="flex flex-row gap-2 w-full">
        <Link
          to={"/"}
          className={`dashboard-card bg-[#e7582b] flex-grow-[2] ${
            !filter ? "underline" : ""
          }`}
        >
          <div className="flex flex-row justify-between">
            <ClipboardCheck />
            <Ellipsis />
          </div>
          <p>
            {allTodos?.length} <br /> All Task
          </p>
        </Link>
        <Link
          to={"?filter=completed"}
          className={`dashboard-card bg-[#582be7] flex-grow ${
            filter === "completed" ? "underline" : ""
          }`}
        >
          <div className="flex flex-row justify-between">
            <Monitor />
            <Ellipsis />
          </div>
          <p>
            {completedTodos?.length} <br /> Completed
          </p>
        </Link>
        <Link
          to={"?filter=pending"}
          className={`dashboard-card bg-[#242424] flex-grow ${
            filter === "pending" ? "underline" : ""
          }`}
        >
          <div className="flex flex-row justify-between">
            <Video />
            <Ellipsis />
          </div>
          <p>
            {pendingTodos?.length} <br /> Pending
          </p>
        </Link>
      </div>
    </section>
  );
};

export default TodoDashboard;
