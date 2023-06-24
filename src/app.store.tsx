import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { imdbApi } from "./services/imdb";
import userSlice from "./modules/user/reducer/userSlice";
import favoriteSlice from "./modules/favorites/reducer/favoriteSlice";

export const store = configureStore({
  reducer: {
    [imdbApi.reducerPath]: imdbApi.reducer,
    favoriteReducer: favoriteSlice,
    userReducer: userSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(imdbApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
