import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../components/apiService/apiService.js";

export const fetchCampers = createAsyncThunk(
  "campers/searchAll",
  async (_, thunkApi) => {
    const state = thunkApi.getState();
    const page = state.campers.page;
    const perPage = state.campers.perPage;
    try {
      const { data } = await instance.get("/advert", {
        page,
        perPage,
      });
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
