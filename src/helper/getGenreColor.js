const genres = [
  "Action",
  "Adventure",
  "Animation",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "Horror",
  "Mystery",
  "Romance",
  "Sci-Fi",
  "Thriller",
  "Western",
];

const genreColors = {
  Action: "text-red-600",
  Adventure: "text-green-500",
  Animation: "text-blue-500",
  Comedy: "text-yellow-500",
  Crime: "text-purple-500",
  Documentary: "text-orange-500",
  Drama: "text-teal-500",
  Family: "text-pink-500",
  Fantasy: "text-indigo-500",
  Horror: "text-gray-800",
  Mystery: "text-brown-500",
  Romance: "text-rose-500",
  "Sci-Fi": "text-cyan-500",
  Thriller: "text-lime-500",
  Western: "text-amber-500",
};

export const getGenreColor = (genre) => {
  const genreFirst = genre.split(",")[0];
  return genres.find((el) => el === genreFirst)
    ? genreColors[genreFirst]
    : null;
};
