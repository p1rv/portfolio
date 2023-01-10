import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  address: "",
  coordinates: {
    lat: 0,
    lon: 0,
  },
};

export const locationSlice = createSlice({
  name: "location",
  initialState: initialState,
  reducers: {
    setLocation: (state, action) => {
      state.address = action.payload.address;
      state.coordinates = action.payload.coordinates;
    },
  },
});

export const locationReducer = locationSlice.reducer;
export const { setLocation } = locationSlice.actions;
