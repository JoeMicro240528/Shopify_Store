import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { TProduct } from "../../types/product";

interface IWishlistState {
    items: TProduct[];
}

const initialState: IWishlistState = {
    items: [],
};

const wishlistSlice = createSlice({
    name: "wishlist",
    initialState,
    reducers: {
        addToWishlist: (state, action: PayloadAction<TProduct>) => {
            const exists = state.items.find(item => item.id === action.payload.id);
            if (!exists) {
                state.items.push(action.payload);
            } else {
                state.items = state.items.filter(item => item.id !== action.payload.id);

            }
        },
        clearWishlist: (state) => {
            state.items = [];
        },

    },
});

export const { addToWishlist, clearWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
