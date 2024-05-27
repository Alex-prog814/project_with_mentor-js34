import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { PRODUCTS_API } from "../../helpers/consts";
import { getTotalPages } from "../../helpers/functions";

export const getProducts = createAsyncThunk(
    "products/getProducts",
    async (_, { getState }) => {
        const { currentPage, currentCategory, search } = getState().products;
        const categoryAndSearchParams = `q=${search}${
            currentCategory && `&type=${currentCategory}`
        }`;
        const pagesLimitParams = `?_start=${currentPage}&_limit=12`;
        const totalPages = await getTotalPages(
            `${PRODUCTS_API}?${categoryAndSearchParams}`
        );
        const res = await axios.get(
            `${PRODUCTS_API}${pagesLimitParams}&q=${search}${
                currentCategory && `&type=${currentCategory}`
            }`
        );
        return { res, totalPages };
    }
);

export const getOneProduct = createAsyncThunk(
    "products/getOneProduct",
    async ({ id }) => {
        let res = await axios.get(`${PRODUCTS_API}/${id}`);
        return res;
    }
);

export const editProduct = createAsyncThunk(
    "products/editProduct",
    async (editedObj, { dispatch }) => {
        let res = await axios.patch(
            `${PRODUCTS_API}/${editedObj.id}`,
            editedObj
        );
        dispatch(getProducts());
        return res;
    }
);

export const createProduct = createAsyncThunk(
    "products/createProduct",
    async (newProductObj, { dispatch }) => {
        let res = await axios.post(PRODUCTS_API, newProductObj);
        dispatch(getProducts);
    }
);

export const deleteProduct = createAsyncThunk(
    "products/deleteProduct",
    async ({ id }, { dispatch }) => {
        await axios.delete(`${PRODUCTS_API}/${id}`);
        dispatch(getProducts());
    }
);
