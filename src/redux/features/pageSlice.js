import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  page: 1,
  pageName: "",
};

const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setPageName: (state, action) => {
      state.pageName = action.payload;
    },
  },
});

export const { setPage, setPageName } = pageSlice.actions;
export default pageSlice.reducer;
