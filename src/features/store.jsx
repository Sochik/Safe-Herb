import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./reducers/cartSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice, // Add the cart reducer
  },
});

export default store;

