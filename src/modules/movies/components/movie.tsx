import React, { useContext } from "react";
import { MoviesContext } from "..";
import { useParams } from "react-router-dom";

export const Movie: React.FC = () => {
  const { movieId } = useParams();
  const movies = useContext(MoviesContext);

  const movie = movies.find(({ id }) => (movieId ?? "") === id);
  if (!movie) return <div>Movie not found</div>;

  console.log("found movie", movie);
  return <div> this is movie</div>;
};
