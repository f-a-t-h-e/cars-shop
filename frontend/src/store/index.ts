import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { trackApi } from "./track.Slice";

export const makeStore = () =>
  configureStore({
    reducer: {
      [trackApi.reducerPath]: trackApi.reducer,
    },
    middleware: (gDM) => gDM().concat(trackApi.middleware),
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export const wrapper = createWrapper<AppStore>(makeStore, { debug: true });
