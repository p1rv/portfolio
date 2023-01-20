import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { useDispatch } from "react-redux";
import { locationReducer } from "./slices/locationSlice";
import { openMeteoReducer } from "./slices/openMeteoSlice";
import { stormGlassReducer } from "./slices/stormGlassSlice";
import { visualCrossingReducer } from "./slices/visualCrossingSlice";

const store = configureStore({
  reducer: {
    location: locationReducer,
    visualCrossing: visualCrossingReducer,
    openMeteo: openMeteoReducer,
    stormGlass: stormGlassReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware();
  },
});

setupListeners(store.dispatch);

export type IRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export * from "./types";
export * from "./slices/locationSlice";
export * from "./slices/openMeteoSlice";
export * from "./slices/stormGlassSlice";
export * from "./slices/visualCrossingSlice";
export * from "./thunks/fetchLocation";
export * from "./thunks/fetchOpenMeteo";
export * from "./thunks/fetchStormGlass";
export * from "./thunks/fetchVisualCrossing";

export default store;
