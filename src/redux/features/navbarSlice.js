import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: false };
const navbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    navbarOpen: (state) => {
      state.value = true;
    },
    navbarClose: (state) => {
      state.value = false;
    },
  },
});

export const { navbarClose, navbarOpen } = navbarSlice.actions;

export default navbarSlice.reducer;
