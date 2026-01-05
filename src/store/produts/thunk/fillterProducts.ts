
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { AxiosErrorHandelling } from "../../../util/axiosErrorHandelling";
import type { TProduct } from "../../../types/product";

type TFilters = {
    category: string,
    minPrice: number,
    maxPrice: number
}

const fillterProducts = createAsyncThunk<TProduct[], TFilters>('products/fillterProducts', async (filters, thunkAPI) => {

    const { rejectWithValue } = thunkAPI
    const { category, minPrice, maxPrice } = filters

    try {
        const response = await axios.get<TProduct[]>(`/products/?category=${category}&minPrice=${minPrice}&maxPrice=${maxPrice}`)
        return response.data
    } catch (error) {
        return rejectWithValue(AxiosErrorHandelling(error))
    }
})

export default fillterProducts