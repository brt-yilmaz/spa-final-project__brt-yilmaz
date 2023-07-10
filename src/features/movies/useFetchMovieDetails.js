import { fetchMovieDetails } from "./apiMovie";
import { useQuery } from "@tanstack/react-query";

export function useFetchMovieDetails(imdbID) {
  const {
    isLoading,
    data: movieDetails,
    error,
  } = useQuery({
    queryKey: [imdbID],
    queryFn: () => fetchMovieDetails(imdbID),
  });
  return { isLoading, error, movieDetails };
}
