import { Box, Button, Divider, Select, Stack, Typography, type SelectChangeEvent } from "@mui/material"
import Breadcrumb from "../components/shared/Breadcrumb"
import AccordionFillter from "../components/shared/AccordionFillter"
import Product from "../components/shared/Product"
import Pagination from '@mui/material/Pagination';
import { useState } from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { useGetProducts } from '../hooks/useGetProducts'
import { useParams } from "react-router";
import ProductSkeleton from "../components/shared/ProductSkeleton";

const Products = () => {

  const { slug } = useParams();
  const { fullyProduct } = useGetProducts();

  const fackArray = Array.from({ length: 6 }, (_, index) => index + 1);
  const [sortOrder, setSortOrder] = useState('');
  const [page, setPage] = useState(1);

  const handleChange = (event: SelectChangeEvent) => {
    setSortOrder(event.target.value);
  };




  const handleSort = () => {
    if (sortOrder === 'Newest') {
      return fullyProduct.sort((a, b) => b.title.localeCompare(a.title));
    } else if (sortOrder === 'Price: Low to High') {
      return fullyProduct.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'Price: High to Low') {
      return fullyProduct.sort((a, b) => b.price - a.price);
    } else if (sortOrder === 'Best Selling') {
      return fullyProduct.sort((a, b) => b.price - a.price);
    }
    return fullyProduct;
  };



  return (
    <Box mt={5} sx={{
      display: { md: 'flex', xs: 'block' },
      gap: 5,
      height: 'auto'
    }}>

      <Box ml={2} sx={{ width: { xs: '100%', md: '35%' } }}>
        <Breadcrumb prev={["Home"]} accuml="Products" />
        <Typography variant="h4" fontWeight={'900'} my={2} sx={{ letterSpacing: '0 !important' }}>
          {slug ? slug + ' products' : 'all Products'}
        </Typography>
        <Typography sx={{ width: '90%' }} variant="body1" color={"#6B7280"} >
          <Divider orientation="horizontal" flexItem />
        </Typography>
        <Box my={2} sx={{ width: '90%' }}>
          <AccordionFillter />
        </Box>
        <Box my={2} width={"90%"} sx={{ display: 'flex', flexDirection: 'row', gap: 1 }}>
          <Button variant="contained" sx={{ fontWeight: "600", bgcolor: 'primary', color: '#FFF', textTransform: 'none', width: '100%', borderRadius: 2, '&:hover': { bgcolor: 'primary.dark' } }}>
            Apply Filters
          </Button>
          <Button variant="contained" sx={{ fontWeight: "600", bgcolor: '#E5E7EB', color: '#374151', textTransform: 'none', width: '100%', borderRadius: 2, '&:hover': { bgcolor: '#D1D5DB' } }}>
            Reset
          </Button>
        </Box>
      </Box>

      <Box sx={{ width: { xs: '100%', md: '65%' } }} >
        <Stack direction="row" justifyContent="space-between" alignItems={'center'} sx={{ display: { md: 'flex', xs: 'block' } }} mb={1}>
          <Typography ml={3} variant="body2" fontWeight={'500'} color={"#6B7280"}>
            {fullyProduct.length * 6}+ Products Available
          </Typography>
          <Typography variant="body2" color={"#6B7280"} sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }} >
            Sort by:   <FormControl component={'form'} onSelect={handleSort} sx={{ m: 1, minWidth: 120 }} size="small">
              <InputLabel id="demo-select-small-label">Sort by</InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={sortOrder}
                label="Sort by"
                onChange={handleChange}
              >
                <MenuItem value={'Newest'}>Newest</MenuItem>
                <MenuItem value={'Price: Low to High'}>Price: Low to High</MenuItem>
                <MenuItem value={'Price: High to Low'}>Price: High to Low</MenuItem>
                <MenuItem value={'Best Selling'}>Best Selling</MenuItem>
              </Select>
            </FormControl>
          </Typography>
        </Stack>
        <Stack sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          gap: 2
        }}>
          {
            fullyProduct.length > 0 ? fullyProduct.slice(page * 6 - 6, page * 6).map((product) => (
              <Product key={product.id} product={product} />
            )) : fackArray.map((item) => <ProductSkeleton key={item} />)
          }
        </Stack>
        {
          fullyProduct.length > 0 && <Pagination size={"large"} color="primary" page={page} onChange={(_, value) => setPage(value)} variant="outlined" count={(Math.floor(fullyProduct.length / 6))} shape="rounded" sx={{ my: 3, display: 'flex', justifyContent: 'center', }} />
        }
      </Box>
    </Box>
  )
}

export default Products
