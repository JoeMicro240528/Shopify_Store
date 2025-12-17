
import { useAppSelector } from "../store/hooks"
import { useAppDispatch } from "../store/hooks"
import type { TProduct } from "../types/product"

export const useWishlist = () => {
    const { items } = useAppSelector(state => state.wishlist)
    const dispatch = useAppDispatch()
    const wishlist = useAppSelector(state => state.wishlist.items)
    const fullyProduct = items.map((item: TProduct) => {
        return {
            ...item,
            quantity: item.quantity,
            isLiked: wishlist.includes(item.id)
        }
    })


    return { fullyProduct, items, dispatch }
}