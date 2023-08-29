import { createSlice } from "@reduxjs/toolkit";
import { registerUser, loginUser } from "./userActions";
import { addDataToLocalStoreg } from "../../helpers/functions";

import { updateToken } from "../../helpers/functions";
const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
        loading: false,
        status: "",
    },
    reducers: {
        clearStatusState: (state) => {
            state.status = "";
        },
        clearUserState: (state) => {
            state.user = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.loading = false;
                state.status = action.payload.res.data;
                action.payload.navigate("/login");
            })
            .addCase(registerUser.rejected, (state) => {
                state.loading = false;
                state.status = "error";
            })
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload.user;
                updateToken();
                addDataToLocalStoreg(
                    action.payload.user,
                    action.payload.res.data
                );
                action.payload.navigate("/");
            })
            .addCase(loginUser.rejected, (state) => {
                state.loading = false;
                state.status = "error";
            });
    },
});

export const { clearStatusState, clearUserState } = userSlice.actions;
export default userSlice.reducer;
