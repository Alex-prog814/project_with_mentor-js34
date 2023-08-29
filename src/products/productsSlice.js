import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "./productsActions";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    loading: false,
    products: [],
  },
  reducers: {},
  extrareducers: (builder) => {
    builder
    .addCase( getProducts.pending,(state) -> (
        state.loading = true
    ))
    .addCase(getProducts.fulfilled,(state,action)=>(
        state.loading = false
        state.products = action.payload.data
    ))
    .addCase(getProducts.rejected,(state)=>(
        state.rejected = 
    ))
  },
});

export default productsSlice.reducer;
