import { createSlice } from '@reduxjs/toolkit';
import { getOneProduct, getProducts } from './productsActions';

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        loading: false,
        products: [],
        oneProduct: null,
        currentPage: 1,
        totalPages: 1,
        currentCategory: '',
        search: ''
    },
    reducers: {
        clearOneProductState: (state) => {
            state.oneProduct = null;
        },
        changePage: (state, action) => {
            state.currentPage = action.payload.page;
        },
        changeCategory: (state, action) => {
            state.currentCategory = action.payload.category;
            state.currentPage = 1;
        },
        changeSearchVal: (state, action) => {
            state.search = action.payload.search;
            state.currentPage = 1;
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(getProducts.pending, (state) => {
            state.loading = true;
        })
        .addCase(getProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.products = action.payload.res.data;
            state.totalPages = action.payload.totalPages;
        })
        .addCase(getProducts.rejected, (state) => {
            state.loading = false;
        })
        .addCase(getOneProduct.pending, (state) => {
            state.loading = true;
        })
        .addCase(getOneProduct.fulfilled, (state, action) => {
            state.loading = false;
            state.oneProduct = action.payload.data;
        })
        .addCase(getOneProduct.rejected, (state) => {
            state.loading = false;
        })
    }
});

export const { clearOneProductState, changePage, changeCategory, changeSearchVal } = productsSlice.actions;
export default productsSlice.reducer;