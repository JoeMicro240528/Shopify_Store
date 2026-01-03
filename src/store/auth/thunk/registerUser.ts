import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { AxiosErrorHandelling } from "../../../util/axiosErrorHandelling";

type TFormData = {
    name: string,
    email: string,
    password: string
    avatar: string
}

const registerUser = createAsyncThunk('auth/registerUser', async (formData: TFormData, thunkAPI) => {

    const { rejectWithValue } = thunkAPI
    try {
        const response = await axios.post('/users/', formData);
        console.log(response.data)
        return response.data

    } catch (error) {
        return rejectWithValue(AxiosErrorHandelling(error))
    }
})

export default registerUser