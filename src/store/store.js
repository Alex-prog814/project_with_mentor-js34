import { configureStore } from '@reduxjs/toolkit';
import userSlice from './user/userSlice';
import productsReducer from './products/productsSlice';

export default configureStore({
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false
    }),
    reducer: {
        user: userSlice,
        products: productsReducer
    }
});
