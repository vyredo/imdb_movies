import { Route, Routes } from "react-router-dom";
import { Movies } from "./components/movies/movies";
import { Movie } from "./components/movie/movie";

export const MovieRouter = () => {
  return (
    <Routes>
      <Route path="" element={<Movies />} />
      <Route path="/:movieId" element={<Movie />} />
    </Routes>
  );
};
