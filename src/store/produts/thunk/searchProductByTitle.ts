import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { AxiosErrorHandelling } from "../../../util/axiosErrorHandelling";
import type { TProduct } from "../../../types/product";


const searchProductByTitle = createAsyncThunk<TProduct[], string>('products/searchProductByTitle', async (title, thunkAPI) => {

    const { rejectWithValue } = thunkAPI

    try {
        const response = await axios.get<TProduct[]>(`/products/?title=${title}`)
        return response.data
    } catch (error) {
        return rejectWithValue(AxiosErrorHandelling(error))
    }
})

export default searchProductByTitle