import React, { createContext, useState } from "react";
import Movie from "../../movies/context/movieCtx";

// Type declaration to help TS typesystem
class FavoritesContextProps {
  favorites: Movie[] = [];
  addFavorite: (movie: Movie) => void = (m) => m;
  removeFavorite: (movie: Movie) => void = (m) => m;
}
export const FavoritesContext = createContext<FavoritesContextProps>(
  new FavoritesContextProps()
);

// Provider will return favorites and API to add/remove favorites
export const FavoritesProvider: React.FC<{ children: React.Component }> = ({
  children,
}) => {
  const [favorites, setFavorites] = useState<Movie[]>([]);

  const addFavorite = (movie: Movie) => {
    setFavorites((prev) => [...prev, movie]);
  };
  const removeFavorite = (movie: Movie) => {
    setFavorites((prev) => prev.filter((m) => m.id !== movie.id));
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
