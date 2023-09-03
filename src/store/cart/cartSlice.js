import { createSlice } from '@reduxjs/toolkit'
import { getCartData } from '../../helpers/functions'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: null,
    countProductsInCart: 0
  },
  reducers: {
    getCart: (state) => {
      state.cart = getCartData();
    }
  }
})

export const { getCard } = cartSlice.actions;
export default cartSlice.reducer;