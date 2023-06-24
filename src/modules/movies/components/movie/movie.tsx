import React from "react";
import { useParams } from "react-router-dom";

import { Header } from "../../../../sharedComponents/Header/Header";
import { Movie as MovieType, imdbApi } from "../../../../services/imdb";
import "./movie.scss";
import { useAppDispatch, useAppSelector } from "../../../../app.store";
import {
  addToFavorite,
  removeFromFavorite,
} from "../../../favorites/reducer/favoriteSlice";

export const Movie: React.FC = () => {
  const favorites = useAppSelector((state) => state.favoriteReducer);
  const dispatch = useAppDispatch();
  const isFavorite = (movie: MovieType) => !!favorites[movie.id];

  const { movieId } = useParams();
  const { data } = imdbApi.useGetMoviesQuery("en");
  const movie = data?.items.find((movie) => movie.id === movieId);
  if (!movie) return <div>Movie not found</div>;

  const handleClick = (movie: MovieType) => {
    if (isFavorite(movie)) {
      return dispatch(removeFromFavorite(movie));
    }

    dispatch(addToFavorite(movie));
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
