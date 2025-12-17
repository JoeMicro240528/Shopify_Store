export type TProduct = {
    id?: number,
    title: string,
    slug: string,
    price: number,
    description: string,
    category: {
        id: number,
        name: string,
        image: string,
        slug: string
    },
    images: string[],
    quantity?: number,
    isLiked?: boolean
}