import React, { useContext } from "react";
import { FavoritesContext } from "..";
import Movie from "../../movies/context/movieCtx";
import { useFavoriteAPI } from "../context/favoritesAPI";

const FavoriteItem: React.FC<{ movie: Movie }> = ({ movie }) => {
  const { favorites, setFavorites } = useContext(FavoritesContext);
  const { removeFromFavorite } = useFavoriteAPI(favorites, setFavorites);
  return (
    <div>
      FavoriteItem
      <button onClick={() => removeFromFavorite(movie)}>
        remove From Favorite
      </button>
    </div>
  );
};

export const Favorites: React.FC = () => {
  const { favorites } = useContext(FavoritesContext);

  return Array.from(favorites).map(([, fmovie]) => {
    return <FavoriteItem key={fmovie.id} movie={fmovie} />;
  });
};
