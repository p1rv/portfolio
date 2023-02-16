import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { setLoading } from "../actions";
import { fetchOpenMeteo } from "../thunks/fetchOpenMeteo";
import { IForecast, initialForecastState } from "../types";

const openMeteo = createSlice({
  name: "openMeteo",
  initialState: initialForecastState,
  reducers: {
    setOpenMeteo: (state, action: PayloadAction<IForecast[]>) => {
      state.data = action.payload;
      state.error = null;
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(setLoading, (state, action) => {
      state.isLoading = action.payload;
    });
    builder.addCase(fetchOpenMeteo.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchOpenMeteo.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
      state.data = [];
    });
    builder.addCase(fetchOpenMeteo.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.data = action.payload;
    });
  },
});

export const openMeteoReducer = openMeteo.reducer;
export const { setOpenMeteo } = openMeteo.actions;
