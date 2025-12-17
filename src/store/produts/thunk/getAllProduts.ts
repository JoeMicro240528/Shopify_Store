import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { TProduct } from "../../../types/product";
import { AxiosErrorHandelling } from "../../../util/axiosErrorHandelling";


const getAllProduts = createAsyncThunk('products/getAllProduts', async (_, thunkAPI) => {

    const { rejectWithValue } = thunkAPI
    try {
        const response = await axios.get<TProduct[]>(` https://api.escuelajs.co/api/v1/products`)
        return response.data
    } catch (error) {
        return rejectWithValue(AxiosErrorHandelling(error))
    }
})

export default getAllProduts