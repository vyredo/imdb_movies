import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export class User {
  id: string;
  name: string;
  email: string;
  constructor(id: string, name: string, email: string) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
}

const initialState: User[] = [];

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    create(state, action: PayloadAction<User>) {
      state.push(action.payload);
    },
    edit(state, action: PayloadAction<User>) {
      state = state.map((user) => {
        if (user.id === action.payload.id) {
          return action.payload;
        }
        return user;
      });
    },
    remove(state, action) {
      state = state.filter((user) => user.id !== action.payload.id);
    },
  },
});

export const { create, edit, remove } = userSlice.actions;
export default userSlice.reducer;
