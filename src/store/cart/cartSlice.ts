import { createSelector, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { TProduct } from "../../types/product";
import type { RootState } from "../index";
import type { Tloading } from "../../types/shared";

interface ICartState {
    items: TProduct[]
    loading: Tloading
    error: string | null
}

const initialState: ICartState = {
    items: [],
    loading: 'idle',
    error: null

}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<TProduct>) {
            const product = action.payload
            const existingItem = state.items.find((item) => item.id === product.id)

            if (existingItem) {
                existingItem.quantity = (existingItem.quantity ?? 0) + (product.quantity ?? 1)
            } else {
                state.items.push({ ...product, quantity: product.quantity ?? 1 })
            }
        },
        removeFromCart(state, action) {
            const id = action.payload
            state.items = state.items.filter((item) => item.id !== id)
        },
        changeQuantity(state, action) {
            const { id, quantity } = action.payload
            const item = state.items.find((item) => item.id === id)
            if (item) {
                item.quantity = quantity

            }

        },

        clenCartProudactFullInfo(state) {
            state.items = []
            state.loading = 'idle'
            state.error = null
        },

        checkOut(state) {
            state.items = []
            state.loading = 'succseeded'
            state.error = null
        }
    },


})

export const getCartTotalQuantity = createSelector(
    (state: RootState) => state.cart.items,
    (items) => {
        const totalQuantity = items.reduce((total, item) => total + (item.quantity ?? 0), 0)
        return totalQuantity
    }
)

export const { addToCart, changeQuantity, removeFromCart, clenCartProudactFullInfo, checkOut } = cartSlice.actions
export default cartSlice.reducer
