import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { TProduct } from "../../../types/product";
import type { RootState } from "../../index";
import { AxiosErrorHandelling } from "../../../util/axiosErrorHandelling";


const getProductbyCategories = createAsyncThunk<TProduct[], string, { state: RootState }>('products/getProductbyCategories', async (slug, thunkAPI) => {

    const { rejectWithValue, getState } = thunkAPI

    const state = getState()
    const id = state.categories.categories.find((category) => category.slug === slug)?.id

    if (!id) {
        return rejectWithValue('Category not found')
    }

    try {
        const response = await axios.get<TProduct[]>(`https://api.escuelajs.co/api/v1/categories/${id}/products`)
        return response.data
    } catch (error) {
        return rejectWithValue(AxiosErrorHandelling(error))
    }
})

export default getProductbyCategories