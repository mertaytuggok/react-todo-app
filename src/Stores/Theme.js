import { createSlice } from "@reduxjs/toolkit";

export const Theme = createSlice({
  name: "Theme",
  initialState: {
    dark: false,
  },
  reducers: {
    setDarkMode: (state) => {
      state.dark = !state.dark;
    },
  },
});

export const { setDarkMode } = Theme.actions;
export default Theme.reducer;
