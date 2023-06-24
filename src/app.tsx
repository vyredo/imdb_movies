import { Route, Routes } from "react-router-dom";
import { NoMatch } from "./sharedComponents/NoMatch";
import { MovieRouter } from "./modules/movies";
import { FavoriteRouter } from "./modules/favorites";
import { BrowserRouter } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

import { store } from "./app.store";
import { Provider } from "react-redux";

import "./reset.scss";
import "./app.scss";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MovieRouter />} />
        <Route path="movies/*" element={<MovieRouter />} />
        <Route path="favorites/*" element={<FavoriteRouter />} />
        {/* 404 routes */}
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
  );
};

const App: React.FC = () => {
  // todo: add notification
  return (
    <ErrorBoundary fallbackRender={() => <div>something wrong</div>}>
      <Provider store={store}>
        {/* <MoviesProvider>
          <FavoritesProvider> */}
        <Router />
        {/* </FavoritesProvider>
        </MoviesProvider> */}
      </Provider>
    </ErrorBoundary>
  );
};

export default App;
