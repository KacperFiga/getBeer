import { configureStore } from "@reduxjs/toolkit";
import { getBeer } from "../features/beersSlice";
import beerSlice from "../features/beersSlice";

const store = configureStore({
  reducer: beerSlice,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: getBeer,
      },
      serializableCheck: false,
    }),
});

export default store;
