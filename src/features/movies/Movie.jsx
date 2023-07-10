import { FcCalendar } from "react-icons/fc";
import { FaStar } from "react-icons/fa";
import { useFetchMovieDetails } from "./useFetchMovieDetails";
import Spinner from "../../ui/Spinner";

function Movie({ movieData }) {
  const { Title, Poster, Year, imdbID } = movieData;

  const { isLoading, error, movieDetails } = useFetchMovieDetails(imdbID);

  if (isLoading) return <Spinner />;

  const { imdbRating } = movieDetails;

  return (
    <div className="rounded-xl bg-gray-600 px-6 pb-2 pt-6 shadow-md shadow-slate-500">
      <div className="">
        <img src={Poster} alt={Title} className="w-full rounded-md" />
      </div>
      <h3 className=" pb-2 pt-4 text-lg font-medium">{Title}</h3>
      <div className="flex justify-between  font-medium text-teal-300">
        <div className="flex items-center justify-between gap-2">
          <FcCalendar />
          <span>{Year}</span>
        </div>
        <div className="flex items-center gap-2">
          <a target="_blank" href={`https://www.imdb.com/title/${imdbID}`}>
            IMDB
          </a>
          <div className="flex items-center gap-1 text-yellow-400">
            <span>{imdbRating}</span>
            <FaStar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Movie;
