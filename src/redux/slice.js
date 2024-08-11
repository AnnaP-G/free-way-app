import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers } from "./operations.js";

const initialState = {
  items: [],
  isLoading: false,
  isError: null,
  currentPage: 1,
  perPage: 4,
};

const campersSlice = createSlice({
  name: "campers",
  initialState,
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = [...state.items, ...action.payload];
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      });
  },
});

export const { setCurrentPage } = campersSlice.actions;
export const campersReducer = campersSlice.reducer;
