import { configureStore } from '@reduxjs/toolkit';
import userSlice from './user/userSlice';
import productsReducer from './products/productsSlice';
import cartReducer from './cart/cartSlice';

export default configureStore({
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false
    }),
    reducer: {
        user: userSlice,
        products: productsReducer,
        cart: cartReducer
    }
});
