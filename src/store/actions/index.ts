import { createAction } from "@reduxjs/toolkit";

export const setLoading = createAction<boolean>("forecast/setLoading");
