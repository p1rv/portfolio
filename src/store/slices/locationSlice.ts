import {
  ActionCreatorWithPayload,
  createSlice,
  SerializedError,
} from "@reduxjs/toolkit";
import { getLocation } from "../thunks/getLocation";

export interface ILocationData {
  address: string;
  coordinates: {
    lat: number;
    lon: number;
  };
}

export interface ILocationState {
  data: ILocationData;
  error: null | SerializedError;
  isLoading: boolean;
}

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
    setLocation: (state, action: { payload: ILocationData }) => {
      state.data.address = action.payload.address;
      state.data.coordinates = action.payload.coordinates;
      state.isLoading = false;
      state.error = null;
    },
    setIsLocationLoading: (state, action: { payload: boolean }) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getLocation.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getLocation.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.error = null;
    });
    builder.addCase(getLocation.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
});

export const locationReducer = locationSlice.reducer;
export const { setLocation, setIsLocationLoading } = locationSlice.actions;
