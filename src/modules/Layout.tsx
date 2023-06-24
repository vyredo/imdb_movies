import { Link, Outlet } from "react-router-dom";

const links = [
  {
    path: "/movies",
    label: "Movies",
  },
  {
    path: "/favorites",
    label: "Favorites",
  },
];

export function Layout() {
  return (
    <>
      <nav>
        <ul>
          {links.map((l) => (
            <li key={l.label}>
              <Link to={l.path}>{l.label}</Link>
            </li>
          ))}
        </ul>
      </nav>

      <hr />

      {/* An <Outlet> renders whatever child route is currently active, */}
      <Outlet />
    </>
  );
}
