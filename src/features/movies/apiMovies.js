export async function fetchMovies(query) {
  const res = await fetch(
    `http://www.omdbapi.com/?i=tt3896198&apikey=71177485&s=${query}`
  );
  const data = await res.json();
  return data.Search;
}
