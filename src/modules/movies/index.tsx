import { Route, Routes } from "react-router-dom";
import { Movies } from "./components/movies";
import { Movie } from "./components/movie";

// eslint-disable-next-line react-refresh/only-export-components
export * from "./context/movieCtx";

export const MovieRouter = () => {
  return (
    <Routes>
      <Route path="" element={<Movies />} />
      <Route path=":movieId" element={<Movie />} />
    </Routes>
  );
};
