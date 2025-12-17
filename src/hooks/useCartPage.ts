import { useAppSelector } from "../store/hooks"
import { useNavigate } from "react-router"
import type { TProduct } from "../types/product"
import { useAppDispatch } from "../store/hooks"

export const useCartPage = () => {

    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const { items } = useAppSelector(state => state.cart)


    const fullyProduct = items.map((item: TProduct) => {
        return {
            ...item,
            quantity: item.quantity,
        }
    })



    return { fullyProduct, items, dispatch, navigate }
}