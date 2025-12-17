import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, CardMedia } from '@mui/material';
import { AddShoppingCart, FavoriteBorder } from '@mui/icons-material';
import type { TProduct } from '../../types/product';
import { useNavigate } from "react-router"
import { addToCart } from '../../store/cart/cartSlice';
import { useAppDispatch } from '../../store/hooks';
import { addToWishlist } from '../../store/wishlist/wishlistSlice';

const Product = ({ product }: { product: TProduct }) => {

    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    return (
        <>
            <Card variant='outlined' sx={{
                bgcolor: 'inherit',
                border: 'none',
                cursor: 'pointer'
            }}>
                <CardContent>
                    <Box onClick={() => navigate(`/products/${product.id}`)} borderRadius={5} sx={
                        {
                            background: "#F7F8F7",
                            overflow: 'hidden'
                        }
                    }>
                        <CardMedia
                            sx={{
                                transition: 'all 0.3s ease-in-out',
                                marginBottom: '10px',
                                '&:hover': {
                                    transform: 'scale(1.1)'
                                }
                            }}
                            component="img"
                            height="350"
                            image={product.images[0]}
                            alt="Paella dish"
                        />
                    </Box>
                    <Box>
                        <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Button size="small" sx={{
                                borderRadius: '10%',
                                padding: '7px',
                                bgcolor: product.isLiked ? 'error.main' : 'inherit',
                                transition: 'all 0.5s',
                                color: product.isLiked ? '#FFFFFF' : '#000',
                                '&:hover': {
                                    bgcolor: 'error.main',
                                    color: '#fff'
                                }

                            }} onClick={() => dispatch(addToWishlist(product))}><FavoriteBorder /></Button>
                            <Button size="small" sx={{
                                borderRadius: '10%',
                                padding: '7px',
                                bgcolor: 'inherit',
                                transition: 'all 0.5s',
                                color: '#000',
                                '&:hover': {
                                    bgcolor: 'primary.main',
                                    color: '#fff'
                                }

                            }} onClick={() => dispatch(addToCart(product))}><AddShoppingCart /></Button>

                        </CardActions>
                    </Box>
                    <Typography variant="body1" component="div">
                        {product.title}
                    </Typography>
                    <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>${product.price}</Typography>
                </CardContent>

            </Card>
        </>
    )
}

export default Product