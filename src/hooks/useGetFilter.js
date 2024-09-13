import { useSearchParams } from "react-router-dom";

export const useGetFilter = () => {
  const [searchParams] = useSearchParams();
  const filter = searchParams.get("filter");

  return { filter };
};
