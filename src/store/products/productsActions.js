import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { PRODUCTS_API } from "../../helpers/consts";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    let res = await axios.get(PRODUCTS_API);
    return res;
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
    let res = await axios.patch(`${PRODUCTS_API}/${editedObj.id}`, editedObj);
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

