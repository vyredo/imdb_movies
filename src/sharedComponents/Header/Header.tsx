import { Link, Outlet } from "react-router-dom";
import "./Header.scss";
import { BackButton } from "./BackButton";

export const Header: React.FC<{ title?: string }> = ({ title }) => {
  if (title) {
    return (
      <>
        <div className="header">
          <BackButton />
          <div className="header-title"> {title}</div>
        </div>
        <hr />
      </>
    );
  }

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link className="movies-link" to="/movies">
              Top 250 Movies
            </Link>
          </li>

          <li>
            <Link className="favorites-link" to="/favorites">
              Favorites
            </Link>
          </li>
        </ul>
      </nav>

      <hr />

      {/* An <Outlet> renders whatever child route is currently active, */}
      <Outlet />
    </>
  );
};
