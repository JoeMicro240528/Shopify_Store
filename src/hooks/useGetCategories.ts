import { useAppDispatch, useAppSelector } from "../store/hooks"
import getCategories from "../store/categories/thunk/getCategories"
import { useEffect } from "react"

export const useGetCategories = () => {
    const dispatch = useAppDispatch()
    const categories = useAppSelector((state) => state.categories)
    useEffect(() => {
        dispatch(getCategories())
    }, [dispatch])
    return categories
}