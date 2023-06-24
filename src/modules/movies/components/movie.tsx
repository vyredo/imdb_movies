import React, { useContext } from "react";
import { MoviesContext } from "..";
import { useParams } from "react-router-dom";

import { Movie as MovieType } from "../context/movieCtx";
import { useFavoriteAPI } from "../../favorites/context/favoritesAPI";
import { FavoritesContext } from "../../favorites";

export const Movie: React.FC = () => {
  const { favorites, setFavorites } = useContext(FavoritesContext);
  const { addToFavorite, removeFromFavorite, isFavorite } = useFavoriteAPI(
    favorites,
    setFavorites
  );
  const { movieId } = useParams();
  const movies = useContext(MoviesContext);

  const movie = movies.find(({ id }) => (movieId ?? "") === id);
  if (!movie) return <div>Movie not found</div>;

  const handleClick = (movie: MovieType) => {
    if (isFavorite(movie)) {
      return removeFromFavorite(movie);
    }

    addToFavorite(movie);
  };

  return (
    <div>
      this is movie
      <button onClick={() => handleClick(movie)}>
        {isFavorite(movie) ? "remove from favorite" : "add to favorite"}
      </button>
    </div>
  );
};
