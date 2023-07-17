import { moviesFakeArray } from "../../data/fakeArrays";
import Movie from "./Movie";
import { useSearchMovies } from "./useSearchMovies";
import MoviesListSpinner from "../../ui/MoviesListSpinner";

function MoviesListContainer() {
  const { isLoading, error, movies } = useSearchMovies();

  if (isLoading)
    return moviesFakeArray.map((el) => <MoviesListSpinner key={el} />);

  return (
    <div className="grid gap-6 px-4 pb-10 pt-10 mx-auto grid-cols-[repeat(auto-fit,390px)] place-content-center">
      {movies?.map((movie) => (
        <Movie key={movie.imdbID} movieData={movie} />
      ))}
    </div>
  );
}

export default MoviesListContainer;
