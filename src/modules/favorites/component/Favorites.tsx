import React, { useContext } from "react";
import { FavoritesContext } from "..";
// import Movie from "../../movies/context/movieCtx";
// import { useFavoriteAPI } from "../context/favoritesAPI";
import { MovieItem } from "../../movies/components/movies/movies";
import { Header } from "../../../sharedComponents/Header/Header";

export const Favorites: React.FC = () => {
  const { favorites } = useContext(FavoritesContext);

  // favorites can reuse component from Movies

  return (
    <>
      <Header title="My Favorites" />
      <div className="favorite-page">
        {Array.from(favorites).map(([, fmovie]) => {
          return <MovieItem key={fmovie.id} movie={fmovie} />;
        })}
      </div>
    </>
  );
};
