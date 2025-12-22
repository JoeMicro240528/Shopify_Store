import { Box, Button, Container, Stack, TextField, Typography } from "@mui/material"
import Breadcrumb from "../components/shared/Breadcrumb"
import CartItem from "../components/shared/CartItem"
import { LockPerson } from "@mui/icons-material"
import { Link } from "react-router"
import { useCartPage } from "../hooks/useCartPage"
import LottieHandeller from "../components/shared/LottieHandeller"
import { useEffect, useState } from "react"

const CartPage = () => {

  const { fullyProduct, error, navigate } = useCartPage()

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
    <>
      <Container >
        <  Box mt={5} sx={{

        }}>
          <Breadcrumb prev={["Home"]} accuml="Cart" />
          <Typography variant="h4" fontWeight={'900'} mt={2} sx={{ letterSpacing: '0 !important' }}>
            My Bag
          </Typography>
          <Typography sx={{ width: '90%', mt: 1 }} variant="body1" color={"#6B7280"} >
            You have {fullyProduct.length} items in your cart.<Button onClick={() => navigate("/all products")} sx={{ "textTransform": "none", fontSize: "16px", fontWeight: '550', '&:hover': { textDecoration: 'underline' } }}>Continue Shopping</Button>
          </Typography>
        </Box>
        <Box mt={2} sx={{
          display: { md: 'flex', xs: 'block' },
          gap: 1,

        }}>
          <Box sx={{
            width: { xs: '90%', md: '65%' },
            display: 'flex',
            flexDirection: 'column',
          }}>
            {
              fullyProduct.length > 0 ? fullyProduct.map(item => (
                <CartItem key={item.id} item={item} />
              )) : <Stack sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '50vh', gap: 2 }}>
                <Box mt={2}>
                  <LottieHandeller type="empty" />
                </Box>
                <Typography variant="h5" color="text.secondary">Your Cart  is empty</Typography>
                <Link to="/all products" style={{ color: "#1976D2" }}>Browse Products</Link>
              </Stack>
            }
          </Box>

          {
            fullyProduct.length > 0 && (
              <Box sx={{ m: { xs: "30px auto", md: '0 auto auto auto' }, ml: { xs: "auto", md: 5 }, width: { xs: '80%', md: '35%', }, bgcolor: "#FFF", borderRadius: 3, p: 4, height: 'auto' }}>
                <Typography variant="h5" fontWeight={'600'} mb={2} sx={{ letterSpacing: '0 !important' }}>
                  Order Summary
                </Typography>
                <Box width={'100%'}>
                  <Stack direction={'row'} justifyContent={'space-between'} p={1} mb={1}>
                    <Typography color="#6b7280" variant='body1'>Subtotal</Typography>
                    <Typography variant='body1'>	${fullyProduct.reduce((acc, item) => acc + item.price * (item.quantity ?? 1), 0)}</Typography>
                  </Stack>
                  <Stack direction={'row'} justifyContent={'space-between'} p={1} mb={1}>
                    <Typography color="#6b7280" variant='body1'>Shipping</Typography>
                    <Typography variant='body1'>$20</Typography>
                  </Stack>
                  <Stack direction={'row'} justifyContent={'space-between'} p={1} pb={2} borderBottom={"1px solid #e4e4e4"}>
                    <Typography color="#6b7280" variant='body1'>Taxes</Typography>
                    <Typography variant='body1'>$15</Typography>
                  </Stack>
                  <Stack direction={'row'} justifyContent={'space-between'} p={1} my={1}>
                    <Typography variant='h6' fontWeight={'600'}>Order Total</Typography>
                    <Typography variant='h6' fontWeight={'600'}>${fullyProduct.reduce((acc, item) => acc + item.price * (item.quantity ?? 1), 0) + 20 + 15}</Typography>
                  </Stack>
                  <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} spacing={2} p={1} my={1}>
                    <TextField id="outlined-basic" placeholder="Enter promo code" variant="outlined" />
                    <Button variant="contained" sx={{ height: "45px", color: "#000", fontWeight: "600", bgcolor: '#D1D5DB', textTransform: 'none', width: '100px', borderRadius: 2 }}>Apply</Button>
                  </Stack>
                  <Button startIcon={<LockPerson />} variant="contained" sx={{ fontSize: "14px", width: "100%", fontWeight: "600", bgcolor: 'primary.main', color: '#FFF', textTransform: 'none', borderRadius: 2, '&:hover': { bgcolor: 'primary.dark' } }}>
                    Proceed to Checkout
                  </Button>
                  <Box>
                    <Typography textAlign={'center'} my={1} variant="body2" fontSize={'13px'} color="#6b7280">
                      Secure payments with Stripe.
                    </Typography>
                    <Stack direction={'row'} spacing={1} alignItems={'center'} justifyContent={'center'}>
                      <img width={'20px'} height={'20px'}
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBO0fmxzPQ2GzZsOyYpxoWLplP2HV996SYXHwCSkHTzzY0m0BokRxK9bYc6p1H453e-IyL3HCiHvzZN1Q8ByMGqqxfKIUEbg0iiP1qjVD23Y70K-9PWtrAIJZmmcAM5-7J237Hw2bEauv_xy_Y00TtZ4XuLHD1HccbrM5OSvYQdtkON_oTqA4N_yq4HiE3DpzkC0QJnfZRIPlVlZ0l7uJlFY6XqrNeoRP3IKnQq3sShJCYsfuuctgPk-5Ri8kSSfuIbOLy8j092lA"
                        alt="Visa Card" />
                      <img width={'20px'} height={'20px'}
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfVkruAxzhg4mzYKCqqAKzomEgSEf9D43pj9GPMc6DnTeTrS_q-nuW8vzGE0yo5SZQp7zD9JyBgP2ZIfApXOCKWqVX1eKchdrKAb5kwhdlhTTu3aNZ93EdMFa8Gh4oZp_hc8c1E8K4vrvUQYBIMf4K6XKbOef1Ip5DhIXidgZ0NDX-Y7SnJ1J6R2Tt_lCG5yE2c5yqHKrf32g3a6gLxgWvmeU1F8CYrL8xVrlHQCjCPD9NaOY4RS9oWeQKEqDsi_HFiwyGJ-kFCy8"
                        alt="Master Card" />
                      <img width={'20px'} height={'20px'}
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBO0fmxzPQ2GzZsOyYpxoWLplP2HV996SYXHwCSkHTzzY0m0BokRxK9bYc6p1H453e-IyL3HCiHvzZN1Q8ByMGqqxfKIUEbg0iiP1qjVD23Y70K-9PWtrAIJZmmcAM5-7J237Hw2bEauv_xy_Y00TtZ4XuLHD1HccbrM5OSvYQdtkON_oTqA4N_yq4HiE3DpzkC0QJnfZRIPlVlZ0l7uJlFY6XqrNeoRP3IKnQq3sShJCYsfuuctgPk-5Ri8kSSfuIbOLy8j092lA"
                        alt="paypal" />
                    </Stack>
                  </Box>
                </Box>
              </Box>
            )
          }
        </Box>
      </Container>
    </>
  )
}

export default CartPage