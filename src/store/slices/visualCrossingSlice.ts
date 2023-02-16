import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { setLoading } from "../actions";
import { fetchVisualCrossing } from "../thunks/fetchVisualCrossing";
import { IForecast, initialForecastState } from "../types";

const visualCrossing = createSlice({
  name: "visualCrossing",
  initialState: initialForecastState,
  reducers: {
    setVisualCrossing: (state, action: PayloadAction<IForecast[]>) => {
      state.data = action.payload;
      state.error = null;
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(setLoading, (state, action) => {
      state.isLoading = action.payload;
    });
    builder.addCase(fetchVisualCrossing.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchVisualCrossing.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
      state.data = [];
    });
    builder.addCase(fetchVisualCrossing.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.data = action.payload;
    });
  },
});

export const visualCrossingReducer = visualCrossing.reducer;
export const { setVisualCrossing } = visualCrossing.actions;
