import { createSlice, SerializedError } from "@reduxjs/toolkit";
import { fetchOpenMeteo } from "../thunks/fetchOpenMeteo";
import { IOpenMeteoState } from "../types";

const initialState: IOpenMeteoState = {
  data: {},
  isLoading: false,
  error: null,
};

const openMeteo = createSlice({
  name: "openMeteo",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
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
