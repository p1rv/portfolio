import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchStormGlass } from "../thunks/fetchStormGlass";
import { IForecast, initialForecastState } from "../types";
import { setLoading } from "../actions";

const stormGlass = createSlice({
  name: "stormGlass",
  initialState: initialForecastState,
  reducers: {
    setStormGlass: (state, action: PayloadAction<IForecast[]>) => {
      state.data = action.payload;
      state.error = null;
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(setLoading, (state, action) => {
      state.isLoading = action.payload;
    });
    builder.addCase(fetchStormGlass.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchStormGlass.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
    builder.addCase(fetchStormGlass.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.data = action.payload;
    });
  },
});

export const stormGlassReducer = stormGlass.reducer;
export const { setStormGlass } = stormGlass.actions;
