import { Box, Stack, Typography } from "@mui/material"
import NumberSpinner from './NumberSpinner';
import { DeleteOutline } from "@mui/icons-material";

 const url = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCiGBwy_qXkzHKf4JveXFR01JEhqhC35iEy1npWbGW1QIyV1nZiVkwlEQvO446gemPs_Fsb-kBC9EZvTsXpOB2PM8x0WnRRu0O8mCsZEjUCwb6fPQ2AVVpNy0UxUWVWTOJCBn-aD4FsNaGlrmIL6R7d7OJ5g62Qtc5rz1AhwUMGfRFIv_FCYrpAbBQ947ve2HnHf4UzZNKH4dojPLfFejVUfi2oKVpp_vABhTtEmuJkDtaM9PbMe61pCqguxjLuslaYlbBLer-Dc34';

const CartItem = () => {
    return (
        <Box ml={2} sx={{ width: { xs: '100%', md: '100%' }  }}>
            <Stack width={"100%"} sx={{flexDirection: { xs: 'column', md: 'row' }}} justifyContent={"space-between"} alignItems={'center'} borderRadius={3} bgcolor={'#FFFFFF'} mb={2} boxShadow={'0px 4px 12px rgba(0, 0, 0, 0.05)'} >
                <Stack spacing={1} direction={'row'} justifyContent={'start'} alignItems={'center'} p={2}  >
                    <Box width={"6rem"} overflow={'hidden'} height={"6rem"}

                        sx={{
                            borderRadius: 3,
                        }}>
                        <img
                            width={"100%"}
                            src={url}
                            alt="item" />
                    </Box>
                    <Typography variant="body1" fontWeight={'500'}>
                        Minimalist Crewneck T-Shirt
                        <Typography variant="body2" color="#9d9d9d" fontWeight={'500'}>
                            Color: Optic White, Size: M
                        </Typography>
                    </Typography>

                </Stack>
                <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} mb={3} px={2} spacing={6} >
                    <Typography width={'120px'} variant="body2" color={"#6B7280"}>
                        <NumberSpinner
                            min={1}
                            max={10}
                            size="small"
                            defaultValue={1}
                            error={false}
                        />
                    </Typography>
                    <Typography pt={3} px={1} variant="h6" fontWeight={700} > $96.0</Typography>
                    <Typography pt={3} color="error" sx={{ cursor: "pointer", "textTransform": "none", fontSize: "22px", fontWeight: '550', '&:hover': { textDecoration: 'underline', color: 'red' } }}><DeleteOutline /></Typography>
                </Stack>
            </Stack>
        </Box>
    )
}

export default CartItem
