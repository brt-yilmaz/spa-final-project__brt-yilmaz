import Spinner from "../../ui/Spinner";
import Movie from "./Movie";
import { useSearchMovies } from "./useSearchMovies";

function MoviesListContainer() {
  const { isLoading, error, movies } = useSearchMovies();

  if (isLoading) return <Spinner />;

  return (
    <div className="grid  grid-cols-1 gap-6 px-10 pb-10 pt-10">
      {movies?.map((movie) => (
        <Movie key={movie.imdbID} movieData={movie} />
      ))}
    </div>
  );
}

export default MoviesListContainer;
