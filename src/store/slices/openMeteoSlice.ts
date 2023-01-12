import { createSlice, PayloadAction, SerializedError } from "@reduxjs/toolkit";
import { fetchOpenMeteo } from "../thunks/fetchOpenMeteo";
import { IOpenMeteoParsed, IOpenMeteoState } from "../types";

const initialState: IOpenMeteoState = {
  data: {},
  isLoading: false,
  error: null,
};

const openMeteo = createSlice({
  name: "openMeteo",
  initialState: initialState,
  reducers: {
    setOpenMeteo: (state, action: PayloadAction<IOpenMeteoParsed>) => {
      state.data = action.payload;
      state.error = null;
      state.isLoading = false;
    },
  },
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
export const { setOpenMeteo } = openMeteo.actions;
