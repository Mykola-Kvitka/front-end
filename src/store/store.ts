import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import URLApi from "src/app/URLService";

export const store = configureStore({
  reducer: {
    [URLApi.reducerPath]: URLApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(URLApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
