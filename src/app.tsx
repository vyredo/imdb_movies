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

/** redux without react */
import { User, create } from "./modules/user/reducer/userSlice";

console.log(store.getState());
const newUser = new User("1", "test", "asfd@asdf.com");
const actionCreateUser = create({ ...newUser });
console.log(actionCreateUser);
console.log(store.dispatch(actionCreateUser));
console.log(store.getState());
/** redux without react */

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
  return (
    <ErrorBoundary fallbackRender={() => <div>something wrong</div>}>
      <Provider store={store}>
        <Router />
      </Provider>
    </ErrorBoundary>
  );
};

export default App;
