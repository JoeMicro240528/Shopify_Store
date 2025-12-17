import { Box, Container, Stack, Typography } from "@mui/material"
import CategoryProduct from "../components/shared/CategoryProduct"
import Breadcrumb from "../components/shared/Breadcrumb"
import { useGetCategories } from '../hooks/useGetCategories'


const Categories = () => {

  const { categories } = useGetCategories()


  const categoriesList = categories.length > 0 ? categories.slice(0, 5).map((category) => (
    <CategoryProduct key={category.id} category={category} />
  )) : <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>Loading...</Box>

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
