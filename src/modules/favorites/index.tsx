import { Route, Routes } from "react-router-dom";
import { Favorites } from "./component/Favorites";

export const FavoriteRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Favorites />} />
    </Routes>
  );
};
