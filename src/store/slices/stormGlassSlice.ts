import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchStormGlass } from "../thunks/fetchStormGlass";
import { IForecast, IForecastState } from "../types";

const initialState: IForecastState = {
  data: [],
  isLoading: false,
  error: null,
};

const stormGlass = createSlice({
  name: "stormGlass",
  initialState: initialState,
  reducers: {
    setStormGlass: (state, action: PayloadAction<IForecast[]>) => {
      state.data = action.payload;
      state.error = null;
      state.isLoading = false;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
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
export const { setStormGlass, setLoading } = stormGlass.actions;
