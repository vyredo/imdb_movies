import { Route, Routes } from "react-router-dom";
import { NoMatch } from "./modules/NoMatch";
import { Layout } from "./modules/Layout";
import { MovieRouter, MoviesProvider } from "./modules/movies";
import { FavoriteRouter, FavoritesProvider } from "./modules/favorites";
import { BrowserRouter } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

// import "./reset.scss";
import "./global.scss";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="movies/*" element={<MovieRouter />} />
          <Route path="favorites/*" element={<FavoriteRouter />} />

          {/* 404 routes */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

const App: React.FC = () => {
  // todo: add test with react-testing-library
  // todo: add notification
  // todo: uncomment reset css
  // todo: add back button
  return (
    <ErrorBoundary fallbackRender={() => <div>something wrong</div>}>
      <MoviesProvider>
        <FavoritesProvider>
          <Router />
        </FavoritesProvider>
      </MoviesProvider>
    </ErrorBoundary>
  );
};

export default App;
