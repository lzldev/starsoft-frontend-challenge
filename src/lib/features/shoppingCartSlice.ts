import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../schema/product";

export type CartEntry = {
  product: Product;
  count: number;
};

export type ShoppingCartSliceState = {
  products: Record<number, CartEntry>;
  showCart: boolean;
};

export const initialState: ShoppingCartSliceState = {
  products: {},
  showCart: false,
};

export const shoppingCartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: (create) => ({
    clearCart: create.reducer((state) => {
      state.products = {};
    }),
    removeProduct: create.reducer(
      (state, { payload }: PayloadAction<{ id: number; count: number }>) => {
        const product = state.products[payload.id];

        if (!product) {
          return;
        }

        if (product.count - payload.count <= 0) {
          delete state.products[payload.id];
          return;
        }

        product.count -= payload.count;
      }
    ),
    addProduct: create.reducer((state, { payload }: PayloadAction<Product>) => {
      const product = state.products[payload.id];

      if (!product) {
        state.products[payload.id] = { product: payload, count: 1 };
        return;
      }

      product.count++;
    }),
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
    selectProducts: (state) => state.products,
    selectCount: (state) => {
      return Object.values(state.products).reduce((acc, v) => acc + v.count, 0);
    },
    selectTotal: (state) => {
      return Object.values(state.products).reduce(
        (acc, v) => acc + v.count * v.product.price,
        0
      );
    },
  },
});

export const {
  hideCart,
  showCart,
  toggleCart,
  addProduct,
  removeProduct,
  clearCart,
} = shoppingCartSlice.actions;

export const { selectShowCart, selectCount, selectProducts, selectTotal } =
  shoppingCartSlice.selectors;
