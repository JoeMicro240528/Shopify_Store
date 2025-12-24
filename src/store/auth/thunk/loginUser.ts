import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { AxiosErrorHandelling } from "../../../util/axiosErrorHandelling";

type TLoginData = {
    email: string,
    password: string
}

const loginUser = createAsyncThunk('auth/loginUser', async (loginData: TLoginData, thunkAPI) => {

    const { rejectWithValue } = thunkAPI
    try {
        const response = await axios.post('https://api.escuelajs.co/api/v1/auth/login', loginData);
        return response.data

    } catch (error) {
        return rejectWithValue(AxiosErrorHandelling(error))
    }
})

export default loginUser
