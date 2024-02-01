import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    add: (state, action) => {
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    },
  },
});

export const { add } = cartSlice.actions;

export default cartSlice.reducer;
