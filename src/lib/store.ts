import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { shoppingCartSlice } from "./features/shoppingCartSlice";

const rootReducer = combineSlices(shoppingCartSlice);

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
    devTools: true,
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
