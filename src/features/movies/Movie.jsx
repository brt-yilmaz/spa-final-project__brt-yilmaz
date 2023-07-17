import { FaStar } from "react-icons/fa";
import { useFetchMovieDetails } from "./useFetchMovieDetails";
import MovieSkeleton from "../../ui/MovieSkeleton";
import { getGenreColor } from "../../helper/getGenreColor.js";

function Movie({ movieData }) {
  const { Title, Poster, Year, imdbID } = movieData;

  const { isLoading, error, movieDetails } = useFetchMovieDetails(imdbID);
  return isLoading ? (
    <MovieSkeleton />
  ) : (
    <>
      <div className="rounded-xl w-96 flex gap-4 bg-gray-600 px-4 pb-3 pt-4 shadow-md justify-self-center	 shadow-slate-500  animate-fadeIn">
        <div className="w-2/5">
          <img src={Poster} alt={Title} className="w-full rounded-md" />
        </div>
        <div className="flex flex-col gap-2 w-3/5">
          <h3 // get text color according to movie's first genre
            className={`text-lg font-semibold ${getGenreColor(
              movieDetails.Genre
            )}`}
          >
            {Title}
          </h3>
          <div className="flex flex-col justify-between gap-2 font-medium text-teal-300">
            <div className="flex items-center gap-2">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`https://www.imdb.com/title/${imdbID}`}
              >
                IMDB
              </a>
              <div className="flex items-center gap-1 text-yellow-400">
                <span>
                  {movieDetails.imdbRating === "N/A"
                    ? "Unknown"
                    : movieDetails.imdbRating}
                </span>
                {movieDetails.imdbRating === "N/A" ? null : <FaStar />}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <p>
                Year: <span className="text-yellow-200">{Year}</span>
              </p>
            </div>
            <div>
              <p>
                Director:{" "}
                <span className="text-yellow-200">
                  {movieDetails.Director === "N/A"
                    ? "Unknown"
                    : movieDetails.Director}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Movie;
