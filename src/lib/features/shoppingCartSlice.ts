import { createSlice } from "@reduxjs/toolkit";

export type ShoppingCartSliceState = {
  showCart: boolean;
};

export const initialState: ShoppingCartSliceState = {
  showCart: false,
};

export const shoppingCartSlice = createSlice({
  name: "global",
  initialState,
  reducers: (create) => ({
    showCart: create.reducer((state) => {
      if (state.showCart) return;
      state.showCart = true;
    }),
    hideCart: create.reducer((state) => {
      if (!state.showCart) return;
      state.showCart = false;
    }),
    toggleCart: create.reducer((state) => {
      state.showCart = !state.showCart;
    }),
  }),
  selectors: {
    selectShowCart: (state) => state.showCart,
  },
});

export const { hideCart, showCart, toggleCart } = shoppingCartSlice.actions;
export const { selectShowCart } = shoppingCartSlice.selectors;
