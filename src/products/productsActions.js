import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { PRODUCTS_API } from "../helpers/consts";

export const getProducts = createAsyncThunk("product/getProducts", async () => {
    let res = await axios.get(PRODUCTS_API);
    return res;
});
