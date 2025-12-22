// handel produt skeleton with mui skeleton 
// ever product has 3 skeleton 
// image skeleton  and to button under image and text
import { Box, Skeleton, Stack } from "@mui/material"
const ProductSkeleton = () => {
    return (
        <Box>
            <Skeleton variant="rectangular" width={226} height={350} />
            <Stack mt={2} mr={5} direction={'row'} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Skeleton variant="rectangular" width={64} height={38} />
                <Skeleton variant="rectangular" width={64} height={38} />
            </Stack>
            <Skeleton variant="text" width={226} height={48} />
            <Skeleton variant="text" width={226} height={24} />
        </Box>

    )
}

export default ProductSkeleton