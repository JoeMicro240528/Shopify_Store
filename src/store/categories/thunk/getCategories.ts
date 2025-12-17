import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { TCategory } from "../../../types/category";
import { AxiosErrorHandelling } from "../../../util/axiosErrorHandelling";



const getCategories = createAsyncThunk('categories/getCategories', async (_, thunkAPI) => {

    const { rejectWithValue } = thunkAPI
    try {
        const response = await axios.get<TCategory[]>('https://api.escuelajs.co/api/v1/categories')
        return response.data
    } catch (error) {
        return rejectWithValue(AxiosErrorHandelling(error))
    }
})

export default getCategories