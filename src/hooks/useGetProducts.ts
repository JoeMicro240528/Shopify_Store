import { useAppDispatch, useAppSelector } from "../store/hooks"
import getAllProduts from "../store/produts/thunk/getAllProduts"
import { useEffect } from "react"
import getProductbyCategories from "../store/produts/thunk/getProductbyCategories"
import { useParams } from "react-router"
import { productClenUp } from "../store/produts/productSlice"
import getSingleProduct from "../store/produts/thunk/getSingleProduct"

export const useGetProducts = () => {
    const { slug, id } = useParams()
    const dispatch = useAppDispatch()
    const { records, record, loading, error } = useAppSelector((state) => state.products)

    useEffect(() => {
        if (slug) {
            dispatch(getProductbyCategories(slug))
        } else if (id) {
            dispatch(getSingleProduct(Number(id)))
        } else {
            dispatch(getAllProduts())
        }

        return () => {
            dispatch(productClenUp())
        }

    }, [dispatch, slug, id])

    return { records, record, loading, error }
}