import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: false };
const hamburgerSlice = createSlice({
  name: "hamburger",
  initialState,
  reducers: {
    hamburgerToggle: (state) => {
      state.value = !state.value;
    },
    hamburgerClose: (state) => {
      state.value = false;
    },
  },
});

export const { gethamburgerState, hamburgerToggle, hamburgerClose } =
  hamburgerSlice.actions;

export default hamburgerSlice.reducer;
