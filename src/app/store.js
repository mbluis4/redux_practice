import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cartReducer";

export default configureStore({
  reducer: {
    cart: cartReducer,
  },
});
