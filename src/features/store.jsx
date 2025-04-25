import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./reducers/cartslice";

const store = configureStore({
  reducer: {
    cart: cartSlice, // Add the cart reducer
  },
});

export default store;

