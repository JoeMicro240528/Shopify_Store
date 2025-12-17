import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { TProduct } from "../../../types/product";
import type { RootState } from "../../index";
import { AxiosErrorHandelling } from "../../../util/axiosErrorHandelling";


const getSingleProduct = createAsyncThunk<TProduct, number, { state: RootState }>('products/getSingleProduct', async (id, thunkAPI) => {

    const { rejectWithValue } = thunkAPI

    try {
        const response = await axios.get<TProduct>(`https://api.escuelajs.co/api/v1/products/${id}`)
        return response.data
    } catch (error) {
        return rejectWithValue(AxiosErrorHandelling(error))
    }
})

export default getSingleProduct