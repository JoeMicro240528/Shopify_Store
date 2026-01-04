// handel produt skeleton with mui skeleton 
// ever product has 3 skeleton 
// image skeleton  and to button under image and text
import { Box, Skeleton, Stack } from "@mui/material"
const ProductSkeleton = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Skeleton variant="rectangular" sx={{ md: { width: '226px' }, xs: { width: '100%' } }} height={350} />
            <Stack mt={2} mr={5} direction={'row'} sx={{ display: 'flex', justifyContent: 'space-between' }} spacing={2}>
                <Skeleton variant="rectangular" sx={{ md: { width: '64px' }, xs: { width: '100%' } }} height={38} />
                <Skeleton variant="rectangular" sx={{ md: { width: '64px' }, xs: { width: '100%' } }} height={38} />
            </Stack>
            <Skeleton variant="text" sx={{ md: { width: '226px' }, xs: { width: '100%' } }} height={48} />
            <Skeleton variant="text" sx={{ md: { width: '226px' }, xs: { width: '100%' } }} height={24} />
        </Box>

    )
}

export default ProductSkeleton