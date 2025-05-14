import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/reducers/userSlice";
import cartReducer from "../features/reducers/cartSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
});