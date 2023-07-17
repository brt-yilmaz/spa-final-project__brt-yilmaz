export async function fetchMovieDetails(imdbID) {
  const res = await fetch(
    "https://www.omdbapi.com/?i=" + `${imdbID}&apikey=71177485`
  );
  const data = await res.json();
  console.log(data);
  return data;
}
