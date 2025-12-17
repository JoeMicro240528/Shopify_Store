import { createSlice } from "@reduxjs/toolkit";
import getCategories from "./thunk/getCategories";
import type { TCategory } from "../../types/category";
import type { Tloading } from "../../types/shared";

type Tcategories = {
    categories: TCategory[]
    loading: Tloading
    error: string | null
}

const initialState: Tcategories = {
    categories: [],
    loading: 'idle',
    error: null
}

const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    reducers: {
    },

    extraReducers: (builder) => {
        builder.addCase(getCategories.pending, (state) => {
            state.loading = 'pending'
            state.error = null
            state.categories = []
        })
        builder.addCase(getCategories.fulfilled, (state, action) => {
            state.loading = 'succseeded'
            state.categories = action.payload
        })
        builder.addCase(getCategories.rejected, (state, action) => {
            state.loading = 'failed'
            state.error = action.error.message as string
        })
    }
})
export default categoriesSlice.reducer