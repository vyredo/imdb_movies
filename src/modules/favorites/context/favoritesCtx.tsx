/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, useState } from "react";
import Movie from "../../movies/context/movieCtx";

// Type declaration to help TS typesystem
class FavoritesContextProps {
  favorites: Map<string, Movie> = new Map();
  setFavorites: React.Dispatch<React.SetStateAction<Map<string, Movie>>> =
    () => {};
}
export const FavoritesContext = createContext<FavoritesContextProps>(
  new FavoritesContextProps()
);

// Provider will return favorites and API to add/remove favorites
export const FavoritesProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [favorites, setFavorites] = useState<Map<string, Movie>>(new Map());

  return (
    <FavoritesContext.Provider value={{ favorites, setFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};
