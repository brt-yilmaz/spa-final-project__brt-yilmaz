import { useSelector } from "react-redux";
import { fetchMovies } from "./apiMovies";
import { useQuery } from "@tanstack/react-query";

export function useSearchMovies() {
  const query = useSelector((state) => state.query.query);
  const {
    isLoading,
    data: movies,
    error,
  } = useQuery({
    queryKey: [query],
    queryFn: () => fetchMovies(query),
  });
  return { isLoading, error, movies };
}
