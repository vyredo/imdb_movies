import { useContext, useState } from "react";
import { MoviesContext } from "..";
import Movie from "../context/movieCtx";
import { Link } from "react-router-dom";

const MovieItem = ({ movie }: { movie: Movie }) => {
  return (
    <Link to={`/movies/${movie.id}`}>
      <img src={movie.image} />
      <h3 className="title">{movie.title}</h3>
    </Link>
  );
};

export const Movies: React.FC = () => {
  const topMovies = useContext(MoviesContext);
  return topMovies.map((movie) => <MovieItem key={movie.id} movie={movie} />);
};
