import { configureStore } from '@reduxjs/toolkit';
import userSlice from './user/userSlice';

export default configureStore({
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false
    }),
    reducer: {
        user: userSlice
    }
});