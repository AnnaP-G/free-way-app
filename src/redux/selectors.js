import { createSelector } from "@reduxjs/toolkit";

export const selectCampers = (state) => state.campers.items;
export const selectIsLoading = (state) => state.campers.isLoading;
export const selectIsError = (state) => state.campers.isError;
export const selectCurrentPage = (state) => state.campers.currentPage;
export const selectPerPage = (state) => state.campers.perPage;

export const selectVisibleCampers = createSelector(
  [selectCampers, selectCurrentPage, selectPerPage],
  (campers, page, perPage) => {
    const startIndex = (page - 1) * perPage;
    const endIndex = page * perPage;
    return campers.slice(startIndex, endIndex);
  }
);
