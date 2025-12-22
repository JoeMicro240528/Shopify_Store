
import { useAppSelector } from "../store/hooks"
import { useAppDispatch } from "../store/hooks"
import type { TProduct } from "../types/product"

export const useWishlist = () => {
    const { items, error, loading } = useAppSelector(state => state.wishlist)
    const dispatch = useAppDispatch()
    const fullyProduct = items.map((item: TProduct) => {
        return {
            ...item,
            quantity: item.quantity,
            isLiked: items.some(w => w.id === item.id)
        }
    })


    return { fullyProduct, error, loading, items, dispatch }
}