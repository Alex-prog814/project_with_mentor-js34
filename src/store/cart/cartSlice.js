import { createSlice } from '@reduxjs/toolkit';
import { getCartData, getProductsCountInCart } from '../../helpers/functions';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: null,
        countProductsInCart: 0
    },
    reducers: {
        getCart: (state) => {
            state.cart = getCartData();
            state.countProductsInCart = getProductsCountInCart();
        }
    }
});

export const { getCart } = cartSlice.actions;
export default cartSlice.reducer;