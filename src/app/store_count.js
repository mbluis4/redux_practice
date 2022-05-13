import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features2/counter/counterSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
