import { Movie } from "../../movies";

// API  for favorites
export const useFavoriteAPI = (
  favorites: Map<string, Movie>,
  setFavorites: React.Dispatch<React.SetStateAction<Map<string, Movie>>>
) => {
  const isFavorite = (movie: Movie) => {
    return !!favorites.get(movie.id);
  };

  const addToFavorite = (movie: Movie) => {
    setFavorites((prev) => {
      if (isFavorite(movie)) return prev;
      const newFavorites = new Map(prev);
      newFavorites.set(movie.id, movie);
      return newFavorites;
    });
  };
  const removeFromFavorite = (movie: Movie) => {
    setFavorites((prev) => {
      if (!isFavorite(movie)) return prev;
      const newFavorites = new Map(prev);
      newFavorites.delete(movie.id);
      return newFavorites;
    });
  };

  return {
    isFavorite,
    addToFavorite,
    removeFromFavorite,
  };
};
