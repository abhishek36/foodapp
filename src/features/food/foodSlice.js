import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import foodService from "./foodService";

const foodSlice = createSlice({
  name: "food",
  initialState: {
    isLoading: false,
    isSuccess: false,
    isError: false,
    allFood: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFood.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchFood.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.allFood = action.payload;
      })
      .addCase(fetchFood.rejected, (state, action) => {
        state.isError = true;
      });
  },
});

export default foodSlice.reducer;

export const fetchFood = createAsyncThunk("FETCH/FOOD", async () => {
  try {
    return await foodService.getFood();
  } catch (error) {
    console.log(error);
  }
});
