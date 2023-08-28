import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        loading: false,
        status: ''
    },
    reducers: {
        clearStatusState: (state) => {
            state.status = '';
        },
        clearUserState: (state) => {
            state.user = null;
        }
    }
});

export const { clearStatusState, clearUserState } = userSlice.actions;
export default userSlice.reducer;