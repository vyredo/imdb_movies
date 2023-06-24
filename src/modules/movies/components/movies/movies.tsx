import { Link } from "react-router-dom";
import { Header } from "../../../../sharedComponents/Header/Header";
import { imdbApi } from "../../../../services/imdb";
import "./movies.scss";

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
  const {
    data: topMovies,
    isError,
    isLoading,
  } = imdbApi.useGetMoviesQuery("en");

  if (isError) return <div>Something Wrong</div>;
  if (isLoading) return <div>Loading </div>;

  return (
    <>
      <Header />
      <div className="movies-page">
        {topMovies?.items.map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
};
