import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../cart-items";

export const cartSlice = createSlice({
  name: "cart",
  initialState: cartItems,
  reducers: {
    increment: (state, action) => {
      console.log(action.payload);
    },
  },
});

export default cartSlice.reducer;

export const { increment } = cartSlice.actions;
