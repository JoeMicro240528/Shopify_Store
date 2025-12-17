import axios from "axios"
export function AxiosErrorHandelling(error: unknown) {
    if (axios.isAxiosError(error)) {
        return (error.response?.data.message || error.message)
    } else {
        return ('An unexpected error')
    }
}