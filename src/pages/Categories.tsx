import { Box, Container, Stack, Typography } from "@mui/material"
import CategoryProduct from "../components/shared/CategoryProduct"
import Breadcrumb from "../components/shared/Breadcrumb"
import { useGetCategories } from '../hooks/useGetCategories'
import LottieHandeller from "../components/shared/LottieHandeller"
import CategorySkeleton from "../components/shared/CategorySkeleton"
import { useStartTopScreen } from '../hooks/useStartTopScreen'

const Categories = () => {

  useStartTopScreen()

  const { categories, error, loading } = useGetCategories()


  const categoriesList = categories.length > 0 ? categories.slice(0, 5).map((category) => (
    <CategoryProduct key={category.id} category={category} />
  )) : <CategorySkeleton />



  if (loading === 'pending' || loading === 'idle') {
    return <Box mt={10} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}><LottieHandeller type="loading" /></Box>
  }
  if (error) {
    return <Box mt={10} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}><LottieHandeller type="error" /></Box>
  }



  return (
    <>
      <Container sx={{ my: "40px" }}>
        <Box>
          <Breadcrumb prev={["Home"]} accuml="Categories" />
          <Typography variant="h4" fontWeight={'bold'} my={5} sx={{}}>
            Shop by Category
          </Typography>

          <Stack sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: 4
          }}>

            {
              categoriesList
            }

          </Stack>
        </Box>

      </Container>

    </>
  )
}

export default Categories
