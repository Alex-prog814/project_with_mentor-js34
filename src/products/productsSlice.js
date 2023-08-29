import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "./productsActions";

const productsSlice = createSlice({
    name: "Products",
    initialState: {
        products: [],
        loading: false,
        error: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state) => {
                state.loading = true;
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload.data;
            })
            .addCase(getProducts.rejected, (state) => {
                state.loading = false;
            });
    },
});
export default productsSlice.reducer;
