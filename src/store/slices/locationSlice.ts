import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchLocation } from "../thunks/fetchLocation";
import { ILocationData, ILocationState } from "../types";

const initialState: ILocationState = {
  data: {
    address: "",
    coordinates: {
      lat: 0,
      lon: 0,
    },
  },
  error: null,
  isLoading: false,
};

export const locationSlice = createSlice({
  name: "location",
  initialState: initialState,
  reducers: {
    setLocation: (state, action: PayloadAction<ILocationData>) => {
      state.data.address = action.payload.address;
      state.data.coordinates = action.payload.coordinates;
      state.isLoading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchLocation.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchLocation.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.error = null;
    });
    builder.addCase(fetchLocation.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
});

export const locationReducer = locationSlice.reducer;
export const { setLocation } = locationSlice.actions;
