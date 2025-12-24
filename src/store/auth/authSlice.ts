import { createSlice } from "@reduxjs/toolkit";
import type { Tloading } from "../../types/shared";
import registerUser from "./thunk/registerUser";
import loginUser from "./thunk/loginUser";
import getUserData from "./thunk/getUserData";
type TInitialState = {
    user: {
        id: number,
        name: string,
        email: string,
        avatar: string,
    } | null
    access_token: string | null,
    refresh_token: string | null,
    loading: Tloading
    error: string | null;
}

const initialState: TInitialState = {
    user: null,
    access_token: null,
    refresh_token: null,
    loading: "idle",
    error: null
}


const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        resetUI: (state) => {
            state.loading = "idle"
            state.error = null
        }
    },
    extraReducers: (builder) => {
        builder
            // register user
            .addCase(registerUser.pending, (state) => {
                state.loading = "pending"
                state.error = null
            })
            .addCase(registerUser.fulfilled, (state) => {
                state.loading = "succseeded"
                state.error = null
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.loading = "failed"
                state.error = action.payload as string
            })

            // login user
            .addCase(loginUser.pending, (state) => {
                state.loading = "pending"
                state.error = null
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = "succseeded"
                state.access_token = action.payload.access_token
                state.refresh_token = action.payload.refresh_token
                state.error = null
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = "failed"
                state.error = action.payload as string
            })

            // get user data
            .addCase(getUserData.pending, (state) => {
                state.loading = "pending"
                state.error = null
            })
            .addCase(getUserData.fulfilled, (state, action) => {
                state.loading = "succseeded"
                state.user = action.payload
                state.error = null
            })
            .addCase(getUserData.rejected, (state, action) => {
                state.loading = "failed"
                state.error = action.payload as string
            })
    }

})
export const { resetUI } = authSlice.actions
export default authSlice.reducer