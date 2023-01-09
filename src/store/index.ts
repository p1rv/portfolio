import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { useDispatch } from "react-redux";
import { openMeteoReducer } from "./slices/openMeteoSlice";
import { stormGlassReducer } from "./slices/stormGlassSlice";
import { visualCrossingReducer } from "./slices/visualCrossingSlice";

const store = configureStore({
  reducer: {
    visualCrossing: visualCrossingReducer,
    openMeteo: openMeteoReducer,
    stormGlass: stormGlassReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware();
  },
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export * from "./types";

export default store;
