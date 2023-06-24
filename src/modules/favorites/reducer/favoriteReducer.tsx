import { createSlice } from "@reduxjs/toolkit";
import { Movie } from "../../../services/imdb";

const initialState: Record<string, Movie> = {};

export const favoriteReducer = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addToFavorite: (state, action) => {
      if (state[action.payload.id]) return;
      state[action.payload.id] = action.payload;
    },
    removeFromFavorite: (state, action) => {
      delete state[action.payload.id];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToFavorite, removeFromFavorite } = favoriteReducer.actions;

export default favoriteReducer.reducer;
