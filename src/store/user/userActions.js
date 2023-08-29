import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { ACCOUNT_API } from '../../helpers/consts';

export const registerUser = createAsyncThunk(
    'user/registerUser',
    async ({ user, navigate }) => {
        let formData = new FormData();
        formData.append('username', user.username);
        formData.append('password', user.password);
        let res = await axios.post(`${ACCOUNT_API}/register/`, formData);
        return { res, navigate };
    }
);

export const loginUser = createAsyncThunk(
    'user/loginUser',
    async ({ user, navigate }) => {
        let formData = new FormData();
        formData.append('username', user.username);
        formData.append('password', user.password);
        let res = await axios.post(`${ACCOUNT_API}/api/token/`, formData);
        return { res, navigate, user: user.username };
    }
);