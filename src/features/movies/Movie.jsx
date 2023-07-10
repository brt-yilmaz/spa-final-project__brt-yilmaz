import { FcCalendar } from "react-icons/fc";
import { FaStar } from "react-icons/fa";
import { useFetchMovieDetails } from "./useFetchMovieDetails";
import Skeleton from "@mui/material/Skeleton";

function Movie({ movieData }) {
  const { Title, Poster, Year, imdbID } = movieData;

  const { isLoading, error, movieDetails } = useFetchMovieDetails(imdbID);

  return (
    <div className="rounded-xl bg-gray-600 px-6 pb-2 pt-6 shadow-md shadow-slate-500">
      <div>
        {isLoading ? (
          <Skeleton animation="wave" className="w-full h-[400px] rounded-md" />
        ) : (
          <img src={Poster} alt={Title} className="w-full rounded-md" />
        )}
      </div>
      {isLoading ? (
        <Skeleton animation="wave" className="w-full h-[20px] rounded-md" />
      ) : (
        <h3 className=" pb-2 pt-4 text-lg font-medium">{Title}</h3>
      )}
      <div className="flex justify-between  font-medium text-teal-300">
        {isLoading ? (
          <Skeleton
            animation="wave"
            className={"flex items-center w-12 h-[20px] justify-between gap-2"}
          />
        ) : (
          <div className="flex items-center  justify-between gap-2">
            <FcCalendar />
            <span>{Year}</span>
          </div>
        )}
        {isLoading ? (
          <Skeleton animation="wave" className="flex w-12 items-center gap-2" />
        ) : (
          <div className="flex items-center gap-2">
            <a target="_blank" href={`https://www.imdb.com/title/${imdbID}`}>
              IMDB
            </a>
            <div className="flex items-center gap-1 text-yellow-400">
              <span>{movieDetails.imdbRating}</span>
              <FaStar />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Movie;
