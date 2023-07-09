import { useQuery } from "@tanstack/react-query";
import { fetchMovies } from "./apiMovies";

function SearchedMovies() {
  const {
    isLoading,
    data: movies,
    error,
  } = useQuery({
    queryKey: ["SearchedMovies"],
    queryFn: fetchMovies,
  });
  console.log(data);
  return <div>hallo</div>;
}

export default SearchedMovies;
