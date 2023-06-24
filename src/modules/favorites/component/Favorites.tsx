import React from "react";

import { MovieItem } from "../../movies/components/movies/movies";
import { Header } from "../../../sharedComponents/Header/Header";
import { useAppSelector } from "../../../app.store";

export const Favorites: React.FC = () => {
  const favorites = useAppSelector((state) => state.favoriteReducer);

  return (
    <>
      <Header title="My Favorites" />
      <div className="favorite-page">
        {Object.values(favorites).map((fmovie) => {
          return <MovieItem key={fmovie.id} movie={fmovie} />;
        })}
      </div>
    </>
  );
};
