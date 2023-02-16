import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { setLoading } from "../actions";
import { fetchWeatherBit } from "../thunks/fetchWeatherBit";
import { IForecast, IForecastState } from "../types";

const initialState: IForecastState = {
  data: [],
  error: null,
  isLoading: false,
};

const weatherBit = createSlice({
  name: "weatherBit",
  initialState,
  reducers: {
    setWeatherBit: (state, action: PayloadAction<IForecast[]>) => {
      state.data = action.payload;
      state.error = null;
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(setLoading, (state, action) => {
      state.isLoading = action.payload;
    });
    builder.addCase(fetchWeatherBit.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchWeatherBit.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
      state.data = [];
    });
    builder.addCase(fetchWeatherBit.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.data = action.payload;
    });
  },
});

export const weatherBitReducer = weatherBit.reducer;
export const { setWeatherBit } = weatherBit.actions;
