import React, { createContext, useEffect, useState } from "react";
import { getMovies } from "../../../restAPI/imdb";

export class Movie {
  id = "";
  title = "";
  image = "";
  year = "0";
  imDbRating = "0";
}
export default Movie;
export const MoviesContext = createContext<Movie[]>([]);

// Provider will return favorites and API to add/remove favorites
export const MoviesProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    // on mount populate top 250 movies
    getMovies().then(({ items }) => {
      setMovies(items);
    });
  }, []);

  return (
    <MoviesContext.Provider value={movies}>{children}</MoviesContext.Provider>
  );
};
