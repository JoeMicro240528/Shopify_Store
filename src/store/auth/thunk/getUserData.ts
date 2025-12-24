import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { AxiosErrorHandelling } from "../../../util/axiosErrorHandelling";
import type { RootState } from "../../index";
type TUserData = {
    id: number,
    name: string,
    email: string,
    avatar: string,
    role?: string,
}

const getUserData = createAsyncThunk<TUserData, string, { state: RootState }>('auth/getUserData', async (_, thunkAPI) => {

    const { rejectWithValue, getState } = thunkAPI
    const access_token = getState().auth.access_token;

    try {
        const response = await axios.get('https://api.escuelajs.co/api/v1/auth/profile',
            { headers: { Authorization: `Bearer ${access_token}` } }
        );

        return response.data


    } catch (error) {
        return rejectWithValue(AxiosErrorHandelling(error))
    }
})

export default getUserData
