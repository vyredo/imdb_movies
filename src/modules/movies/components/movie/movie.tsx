import React, { useContext } from "react";
import { MoviesContext } from "../../";
import { useParams } from "react-router-dom";

import { Movie as MovieType } from "../../context/movieCtx";
import { useFavoriteAPI } from "../../../favorites/context/favoritesAPI";
import { FavoritesContext } from "../../../favorites";
import { Header } from "../../../../sharedComponents/Header/Header";
import "./movie.scss";

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
    <>
      <Header title={movie.title} />
      <div className="movie-page">
        <img src={movie.image} />
        <hr />
        <div className="detail-container">
          <div className="id">
            id: <span>{movie.id}</span>
          </div>
          <div className="title">
            title: <span>{movie.title}</span>
          </div>
          <div className="year">
            year: <span>{movie.year}</span>
          </div>
        </div>
        <div className="rating">
          year: <span>{movie.imDbRating}</span>
        </div>
        <button className="favorite-btn" onClick={() => handleClick(movie)}>
          {isFavorite(movie) ? "remove from favorite" : "add to favorite"}
        </button>
      </div>
    </>
  );
};
