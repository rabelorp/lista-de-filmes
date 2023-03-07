import { createSlice } from "@reduxjs/toolkit";

const initialState = "" as any;

const showSlice = createSlice({
  name: "show",
  initialState,
  reducers: {
    showMovie: (state, { payload }) => payload,
    changeFavorite: (state, { payload }) => {
      // state.map((item) => {
      //   if (item.id === payload) item.favorite = !item.favorite;
      //   return item;
      // });
    },
  },
});

export const { showMovie, changeFavorite } = showSlice.actions;

export default showSlice.reducer;
