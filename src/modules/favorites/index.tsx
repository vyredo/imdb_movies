import { Route, Routes } from "react-router-dom";
import { Favorites } from "./component/Favorites";
// eslint-disable-next-line react-refresh/only-export-components
export * from "./context/FavoritesCtx";

export const FavoriteRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Favorites />} />
    </Routes>
  );
};
