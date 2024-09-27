import { useSearchParams } from "react-router-dom";
import { TodoFilter } from "../types/todo.type";

export const useGetFilter = () => {
  const [searchParams] = useSearchParams();
  const filter = searchParams.get("filter") as TodoFilter | null;

  return { filter };
};
