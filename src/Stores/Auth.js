import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: "",
};
const Auth = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = "";
    },
  },
});

export const { login, logout } = Auth.actions;
export const selectUser = (state) => state.Auth.user;
export default Auth.reducer;
