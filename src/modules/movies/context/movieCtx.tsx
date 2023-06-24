import React, { createContext, useContext, useEffect, useState } from "react";
import { getMovies } from "../../../API/imdb";

class Movie {
  id = "";
  title = "";
  image = "";
  year = 0;
  imDbRating = 0;
  isFavorite = false;
}

export default Movie;

export const MoviesContext = createContext<Movie[]>([]);

// Provider will return favorites and API to add/remove favorites
export const MoviesProvider: React.FC<{ children: React.Component }> = ({
  children,
}) => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    // on mount populate top 250 movies
    getMovies().then(({ items }) => setMovies(items));
  }, []);

  return (
    <MoviesContext.Provider value={movies}>{children}</MoviesContext.Provider>
  );
};
