import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const cartSlice = createSlice({
  name: "cart",
  initialState: JSON.parse(localStorage.getItem("cart")) || [],
  reducers: {
    addToCart: (state, action) => {
      const findProduct = state.find((el) => el.id === action.payload.id);
      if (findProduct) {
        toast.error(`This product is already in your cart`, { id: "123" });
      } else {
        action.payload.qty = 1;
        state.push(action.payload);
        toast.success("New product added to cart", { id: "123" });
      }
      localStorage.setItem("cart", JSON.stringify(state));
    },
    changeInCart: (state, action) => {
      state.forEach((cart, i) => {
        if (cart.id === action.payload.id) {
          state[i].qty = action.payload.qty;
        }
      });
      localStorage.setItem("cart", JSON.stringify(state));
    },
    removeFromCart: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
        toast.success("Product removed from cart", { id: "123" });
      }
      localStorage.setItem("cart", JSON.stringify(state));
    },
    clearCart: (state) => {
      state.length = 0;
      toast.success("Cart cleared", { id: "123" });
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

export const { addToCart, changeInCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
