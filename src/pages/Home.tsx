import { Box, Button, Container, Stack, Typography } from "@mui/material"
import Overlay from "../components/shared/Overlay"
import Product from "../components/shared/Product"
import CategoryProduct from "../components/shared/CategoryProduct"


const Home = () => {
  return (
    <>
      <Container sx={{ mt: 7 }} >
        <Box sx={{
          p: 5, overflow: 'hidden', borderRadius: 5, position: 'relative', textAlign:
            'center', width: { xs: '85%', md: '93%' }
          , background: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDyCYZTqSojQs_x_o583eLZI4lCpx1MqepUMvLE4cSPD1y4NuJdEYpVsvJR9BuYsy8GqNntKXs3Rxlv-KExUuylPv22efma4Jczl5GGC4DywM1Ly3TXsqfTWI-7tyPAt720gFogF8RM1BsWzddQ4IPobIpW23NJ01SKHxD8eRgryQjgZP9p2iDThgNnaMYCbUoucIb5qf2HTCt3o9iVujMZYCsAHyn1y2iSn7cqq2ICNkFk1eFoOBbKF0NEivlPM_EQWySnYNifeVI") no-repeat  ',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          height: '70vh',

        }}>
          <Overlay />
          <Stack position={"relative"} zIndex={10} sx={{
            display: 'flex',
            justifyContent: "center",
            alignItems: 'center',
            width: { xs: '100%', md: '60%' },
            height: '100%',
            margin: '0 auto',
          }}>
            <Typography variant="h2" color="#FFF" fontWeight="900" sx={{
              fontSize: { xs: '34px', md: '50px' },

            }}>
              Sustainable Style, Unbeatable Prices
            </Typography>
            <Typography component={'p'} color="#FFF" fontSize={"18px"} my={3}>
              Discover our new collection of eco-friendly apparel and accessories.
            </Typography>
            <Button variant="contained" color="primary" sx={{ mt: 3, px: 4, py: 1.5, borderRadius: 5, bgcolor: 'rgba(59 ,130, 246)', '&:hover': { bgcolor: 'rgba(59 ,130, 246, 0.8)' } }}>
              Explore Collection
            </Button>
          </Stack>
        </Box>

        {/* Trending Now section */}

        <Box mt={15}>
          <Typography variant="h4" fontWeight={'bold'} mb={5} sx={{}}>
            Trending Now
          </Typography>
          <Stack sx={{
            display: 'grid',
            gridTemplateColumns:'repeat(auto-fill, minmax(200px, 1fr))',
            gap:5
          }}>
            <Product />
            <Product />
            <Product />
            <Product />
          </Stack>
        </Box>

        <Box sx={{
          p: 5, overflow: 'hidden', borderRadius: 5, position: 'relative', textAlign:
            'left', width: { xs: '85%', md: '93%' }
          , background: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCylYp8jtO8JM4eXUEwCX_s3AQyXG5107hFEOfJm2bOe-4KFpkacxafODgYd5FeCyhxSkNb4JcAKLLbnelWrsPcp-FJyFrZqqrJG-Pk27yjkqQZCtbACaWxoed2NlukccNYyXK0PPgt5Vdz19KBbu-Sy-7kFLUAnOsewSEV0kZfiOVPtrMGIn_ym7JSFURRZXMpP_XusX-VCAO4ixF4NoFZ-vJsDTimWbpeAnMTKwegJKU8vRMkSWS2_TsQsA-iP7nE98qIfxtpkNo") no-repeat  ',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          height: '50vh',
        }}>
          <Overlay />
          <Stack position={"relative"} zIndex={10} sx={{
            display: 'flex',
            flexDirection: 'column',
            width: { xs: '100%', md: '50%' },
            justifyContent: 'flex-end',
            height: '100%',
          }}>
            <Typography component="h4" color="#FFF" fontWeight="600" sx={{
              fontSize: { xs: '30px', md: '40px' },

            }}>
              20% Off All Winter Wear
            </Typography>
            <Typography component={'p'} color="#FFF" fontSize={"20px"} my={3}>
              Stay warm this season with our latest collection of coats and sweaters.
            </Typography>
            <Button variant="contained" color="primary" sx={{ width: '250px', px: 4, py: 1.5, borderRadius: 10, bgcolor: 'rgba(59 ,130, 246)', '&:hover': { bgcolor: 'rgba(59 ,130, 246, 0.8)' } }}>
              Shop The Sale
            </Button>
          </Stack>
        </Box>

             {/*   Shop by Category section */}

        <Box>
          <Typography variant="h4" fontWeight={'bold'} my={5} sx={{}}>
            Shop by Category
          </Typography>

          <Stack sx={{
              display: 'grid',
               gridTemplateColumns:'repeat(auto-fill, minmax(200px, 1fr))',
               gap: 4
          }}>
               <CategoryProduct/>
                <CategoryProduct/>
                 <CategoryProduct/>
                  <CategoryProduct/>
          </Stack>
        </Box>
      </Container>
      
    </>
  )
}

export default Home