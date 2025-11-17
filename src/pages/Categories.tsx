import { Box, Container, Stack, Typography } from "@mui/material"
import CategoryProduct from "../components/shared/CategoryProduct"
import Breadcrumb from "../components/shared/Breadcrumb"

const Categories = () => {
  return (
    <>
      <Container sx={{ my: "40px" }}>
        <Box>
          <Breadcrumb prev={["Home"]}  accuml="Categories" />
          <Typography variant="h4" fontWeight={'bold'} my={5} sx={{}}>
            Shop by Category
          </Typography>

          <Stack sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: 4
          }}>
            <CategoryProduct />
            <CategoryProduct />
            <CategoryProduct />
            <CategoryProduct />
            <CategoryProduct />
            <CategoryProduct />
            <CategoryProduct />
            <CategoryProduct />
          </Stack>
        </Box>

      </Container>

    </>
  )
}

export default Categories
