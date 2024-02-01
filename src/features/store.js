import { configureStore } from "@reduxjs/toolkit";
import foodSlice from "./food/foodSlice";
import cartSlice from "./cart/cartSlice";

const store = configureStore({
  reducer: {
    food: foodSlice,
    cart: cartSlice,
  },
});

export default store;
