import { configureStore } from "@reduxjs/toolkit";
import { spaceXApi } from "../services/spaceXApi";

export const store = configureStore({
  reducer: {
    [spaceXApi.reducerPath]: spaceXApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(spaceXApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
