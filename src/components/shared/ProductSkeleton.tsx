import { Box, Skeleton, Stack } from "@mui/material"
const ProductSkeleton = () => {
    return (
        <Box>
            <Skeleton variant="rectangular" sx={{ md: { width: '226px' }, xs: { width: '100%' } }} height={350} />
            <Stack mr={5} direction={'row'} spacing={2}>
                <Skeleton variant="rectangular" sx={{ md: { width: '64px' }, xs: { width: '100%' } }} height={38} />
                <Skeleton variant="rectangular" sx={{ md: { width: '64px' }, xs: { width: '100%' } }} height={38} />
            </Stack>
            <Skeleton variant="text" sx={{ md: { width: '226px' }, xs: { width: '100%' } }} height={48} />
            <Skeleton variant="text" sx={{ md: { width: '226px' }, xs: { width: '100%' } }} height={24} />
        </Box>

    )
}

export default ProductSkeleton