import { useContext, useState } from "react";
import { MoviesContext } from "../../";
import Movie from "../../context/movieCtx";
import { Link } from "react-router-dom";
import "./movies.scss";
import { Header } from "../../../../sharedComponents/Header/Header";

export const MovieItem = ({ movie }: { movie: Movie }) => {
  return (
    <Link to={`/movies/${movie.id}`} className="movie-item">
      <div>
        <img src={movie.image} />
      </div>
      <h3 className="title">{movie.title}</h3>
    </Link>
  );
};

export const Movies: React.FC = () => {
  const topMovies = useContext(MoviesContext);
  return (
    <>
      <Header />
      <div className="movies-page">
        {topMovies.map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
};
