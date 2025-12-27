import { Box, Container, Divider, Stack, Typography, Rating, Button, ButtonGroup } from '@mui/material'
import Breadcrumb from '../components/shared/Breadcrumb'

import { CheckCircleOutline, FavoriteBorder } from '@mui/icons-material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Tabscontent from '../components/shared/Tabscontent';
import AccordionInfo from '../components/shared/AccordionInfo';
import { useGetProducts } from '../hooks/useGetProducts'
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../src/store/hooks';
import { addToCart } from '../store/cart/cartSlice';
import { addToWishlist } from '../store/wishlist/wishlistSlice';
import LottieHandeller from "../components/shared/LottieHandeller"
import { useNavigate } from 'react-router';
const ProductInfo = () => {

  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { access_token } = useAppSelector((state) => state.auth)
  const { record, loading, error } = useGetProducts();

  const [imageIndex, setImageIndex] = useState(0);



  if (loading === 'pending' || loading === 'idle') {
    return <Box mt={10} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}><LottieHandeller type="loading" /></Box>
  }
  if (error) {
    return <Box mt={10} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}><LottieHandeller type="notFound" /></Box>
  }


  if (!record) {
    return <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}><LottieHandeller type="notFound" />  </Box>
  }

  return (
    <Container >
      <Box mt={4} sx={{
        display: { md: 'flex', xs: 'block' },
        gap: 5,
        height: 'auto'
      }}>

        <Box ml={4} sx={{ width: { xs: '90%', md: '50%' } }}>
          <Breadcrumb prev={["Home", "Products"]} accuml={record.title} />
          <Box my={4} display={'flex'} sx={{ flexDirection: { md: 'row', xs: 'column' } }} gap={2}>
            <Stack gap={1} sx={{ flexDirection: { md: 'column', xs: 'row' } }}>
              {
                record.images.map((image: string, index: number) => (
                  <Box key={index} onClick={() => setImageIndex(index)} width={"4rem"} overflow={'hidden'} height={"4rem"}

                    sx={{
                      border: "3px solid rgb(19 127 236)", borderRadius: 3,
                      transition: 'all 0.3s ease-in-out',
                      cursor: 'pointer',
                      '&:hover': {
                        transform: 'scale(1.1)'
                      },
                    }}>
                    <img
                      width={"100%"}
                      src={image}
                      alt="" />
                  </Box>
                ))
              }
            </Stack>
            <Box width={"100%"} height={'420px'} overflow={'hidden'} sx={{ cursor: 'pointer', borderRadius: 4 }} >
              <img
                width={"100%"}
                height={'100%'}
                src={record.images[imageIndex]}
                alt="" />
            </Box>
          </Box>
        </Box>

        <Box my={4} sx={{ width: { xs: '100%', md: '50%' }, display: "flex", flexDirection: "column", gap: 1 }} >
          <Typography variant="h4" fontWeight={'700'} >
            {record.title}
          </Typography>
          <Stack direction={'row'} alignItems="center" gap={0.5} >  <Rating size='small' name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly /> <Typography variant="body2" color={"#6B7280"}>(121 reviews)</Typography></Stack>
          <Typography variant="body2" color={"#6B7280"} sx={{ width: '90%' }} >
            {record.description}
          </Typography>
          <Typography variant="h5" fontWeight={'bold'} my={2} sx={{ color: '#000' }}>${record.price} <Typography sx={{ textDecoration: 'line-through', color: '#6B7280', display: 'inline', ml: 1 }}>$99.99</Typography></Typography>
          <Stack mb={2} direction={'row'} alignItems="center" gap={1} color="#16A34A"><CheckCircleOutline style={{ fontSize: "19px" }} /> <Typography fontWeight={'600'} variant='body2'>In Stock</Typography></Stack>
          <Divider sx={{ width: "90%", color: '#ECEFF4' }} />
          <Box>
            <Typography variant="body2" fontWeight={'500'} mb={1}>Color</Typography>
            <Stack direction={'row'} alignItems="center" spacing={1}>
              <Box sx={{ outline: '3px solid #137fec ', width: '25px', height: '25px', bgcolor: '#000', borderRadius: '50%', cursor: 'pointer' }}></Box>
              <Box sx={{ width: '25px', height: '25px', bgcolor: '#F43F5E', borderRadius: '50%', '&:hover': { 'outline': '3px solid #137fec ' }, cursor: 'pointer' }}></Box>
              <Box sx={{ width: '25px', height: '25px', bgcolor: '#0EA5E9', borderRadius: '50%', '&:hover': { 'outline': '3px solid #137fec ' }, cursor: 'pointer' }}></Box>
              <Box sx={{ width: '25px', height: '25px', bgcolor: '#CBD5E1', borderRadius: '50%', '&:hover': { 'outline': '3px solid #137fec ' }, cursor: 'pointer' }}></Box>
            </Stack>
          </Box>
          <Box mt={2}>
            <Typography variant="body2" fontWeight={'500'} mb={1}>Size</Typography>
            <Stack direction={'row'} spacing={2}>
              <ButtonGroup variant="outlined" size='small' sx={{ gap: 1 }} aria-label="Basic button group">
                <Button sx={{ border: "2px solid #cfcfcf !important", borderRadius: "7px !important", color: "#000" }}  >XS</Button>
                <Button sx={{ border: "2px solid #cfcfcf !important", borderRadius: "7px !important", color: "#000" }}  >S</Button>
                <Button sx={{ border: "2px solid #cfcfcf !important", borderRadius: "7px !important", color: "#000" }}  >M</Button>
                <Button sx={{ border: "2px solid #cfcfcf !important", borderRadius: "7px !important", color: "#000" }}  >L</Button>
                <Button sx={{ border: "2px solid #cfcfcf !important", borderRadius: "7px !important", color: "#000" }}  >XL</Button>
                <Button disabled sx={{ border: "2px solid #cfcfcf !important", borderRadius: "7px !important", color: "#000" }}  >XXL</Button>
              </ButtonGroup>
            </Stack>
          </Box>
          <Stack sx={{ flexDirection: { md: 'row', xs: 'column' } }} justifyContent={'center'} alignItems={'center'} gap={1.5}>
            <Button onClick={
              () => {
                if (access_token) {
                  dispatch(addToCart(record))
                } else {
                  navigate('/login')
                }
              }
            }
              sx={{ width: '100%', textTransform: 'none', bgcolor: "#298BED !important", fontWeight: "600", fontSize: "14px" }} variant="contained" startIcon={<ShoppingCartIcon />}>
              Add to Cart
            </Button>
            <Button onClick={
              () => {
                if (access_token) {
                  dispatch(addToWishlist(record))
                } else {
                  navigate('/login')
                }
              }
            }
              sx={{ width: { md: "auto", xs: "100%" }, border: '1px solid #cfcfcf !important', color: '#F43F5E' }} variant="outlined">
              <FavoriteBorder sx={{ fontSize: "22px" }} />
            </Button>
          </Stack>

        </Box>
      </Box>
      <Box ml={5}>
        <Tabscontent />
        <Divider />
        <Box my={5}>
          <Typography mb={2} variant='body2'>
            <p style={{ margin: "0" }}>Product Details</p>
            {record.description}
          </Typography>
          <AccordionInfo />
        </Box>
      </Box>
    </Container>
  )
}

export default ProductInfo
