import { Box, Divider, Typography, Link, Stack, Button } from "@mui/material"
import Breadcrumb from "../components/shared/Breadcrumb"
import Product from "../components/shared/Product"
import { Link as RouterLink } from 'react-router'
import { clearWishlist } from "../store/wishlist/wishlistSlice"
import { useAppDispatch } from '../store/hooks'
import { useWishlist } from "../hooks/useWishlist"
import LottieHandeller from "../components/shared/LottieHandeller"
import { useEffect, useState } from "react"
const WishlistPage = () => {
    const dispatch = useAppDispatch()
    const { fullyProduct, error, items } = useWishlist()

    const [loading, setLoading] = useState('pending')

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading('success')
        }, 2000)


        return () => {
            clearTimeout(timer)
        }
    }, [0])

    if (loading === 'pending' || loading === 'idle') {
        return <Box mt={10} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}><LottieHandeller type="loading" /></Box>
    }
    if (error) {
        return <Box mt={10} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}><LottieHandeller type="error" /></Box>
    }



    return (
        <Box ml={2} mt={5} sx={{ width: { xs: '100%', md: '90%' } }}>
            <Breadcrumb prev={["Home"]} accuml="Wishlist" />
            <Stack direction="row" justifyContent="space-between" alignItems="center" >
                <Typography variant="h4" fontWeight={'900'} my={2} sx={{ letterSpacing: '0 !important' }}>
                    Wishlist
                </Typography>
                <Button variant="contained" size="small" sx={{ width: '150px', height: '40px', mr: 2, bgcolor: '#8989CE', '&:hover': { bgcolor: '#8989CE' } }} onClick={() => dispatch(clearWishlist())}>Clear</Button>
            </Stack>
            <Typography sx={{ width: '90%' }} variant="body1" color={"#6B7280"} >
                <Divider orientation="horizontal" flexItem />
            </Typography>
            <Stack width={'90%'}>
                {items.length > 0 ? (
                    <Stack sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: 2 }}>
                        {fullyProduct.map(product => (
                            <Stack key={product.id} spacing={2}>
                                <Product product={product} />
                            </Stack>
                        ))}
                    </Stack>
                ) : (
                    <Stack sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '50vh', gap: 2 }}>
                        <Box mt={10}>
                            <LottieHandeller type="empty" />
                        </Box>
                        <Typography variant="h5" color="text.secondary">Your wishlist is empty</Typography>
                        <Link component={RouterLink} to="/all products" underline="hover">Browse Products</Link>
                    </Stack>
                )}
            </Stack>
        </Box>
    )
}

export default WishlistPage
