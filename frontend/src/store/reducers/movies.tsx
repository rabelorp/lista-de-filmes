import { createSlice } from "@reduxjs/toolkit";

const initialState = [] as any;

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    moviesList: (state, { payload }) => payload,
  },
});

export const { moviesList } = moviesSlice.actions;

export default moviesSlice.reducer;
