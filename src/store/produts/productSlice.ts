import { createSlice } from "@reduxjs/toolkit";
import getProductbyCategories from "./thunk/getProductbyCategories";
import type { TProduct } from "../../types/product";
import type { Tloading } from "../../types/shared";
import getAllProduts from "./thunk/getAllProduts";
import getSingleProduct from "./thunk/getSingleProduct";
import searchProductByTitle from "./thunk/searchProductByTitle";

type Tproducts = {
    records: TProduct[]
    record: TProduct | null
    loading: Tloading
    error: string | null
}

const initialState: Tproducts = {
    records: [],
    record: null,
    loading: 'idle',
    error: null
}

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        productClenUp: (state) => {
            state.records = [];
            state.record = null;
        }
    },

    extraReducers: (builder) => {

        // get product by categories
        builder.addCase(getProductbyCategories.pending, (state) => {
            state.loading = 'pending'
            state.error = null
            state.records = []
        })
        builder.addCase(getProductbyCategories.fulfilled, (state, action) => {
            state.loading = 'succseeded'
            state.records = action.payload
        })
        builder.addCase(getProductbyCategories.rejected, (state, action) => {
            state.loading = 'failed'
            state.error = action.error.message as string
        })

        //get all products
        builder.addCase(getAllProduts.pending, (state) => {
            state.loading = 'pending'
            state.error = null
            state.records = []
        })
        builder.addCase(getAllProduts.fulfilled, (state, action) => {
            state.loading = 'succseeded'
            state.records = action.payload
        })
        builder.addCase(getAllProduts.rejected, (state, action) => {
            state.loading = 'failed'
            state.error = action.error.message as string
        })

        // get single product
        builder.addCase(getSingleProduct.pending, (state) => {
            state.loading = 'pending'
            state.error = null
            state.record = null
        })
        builder.addCase(getSingleProduct.fulfilled, (state, action) => {
            state.loading = 'succseeded'
            state.record = action.payload
        })
        builder.addCase(getSingleProduct.rejected, (state, action) => {
            state.loading = 'failed'
            state.error = action.error.message as string
        })

        // search product by title
        builder.addCase(searchProductByTitle.pending, (state) => {
            state.loading = 'pending'
            state.error = null
            state.records = []
        })
        builder.addCase(searchProductByTitle.fulfilled, (state, action) => {
            state.loading = 'succseeded'
            state.records = action.payload
        })
        builder.addCase(searchProductByTitle.rejected, (state, action) => {
            state.loading = 'failed'
            state.error = action.error.message as string
        })
    }
})

export const { productClenUp } = productsSlice.actions

export default productsSlice.reducer