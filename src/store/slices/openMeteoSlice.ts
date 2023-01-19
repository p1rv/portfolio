import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { setLoading } from "../actions";
import { fetchOpenMeteo } from "../thunks/fetchOpenMeteo";
import { IForecast, IForecastState } from "../types";

const initialState: IForecastState = {
  data: [],
  isLoading: false,
  error: null,
};

const openMeteo = createSlice({
  name: "openMeteo",
  initialState: initialState,
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
