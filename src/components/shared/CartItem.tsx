import { Box, Stack, Typography } from "@mui/material"
import type { TProduct } from "../../types/product";
import NumberSpinner from './NumberSpinner';
import { DeleteOutline } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { changeQuantity, removeFromCart } from "../../store/cart/cartSlice";
const CartItem = ({ item }: { item: TProduct }) => {
    const dispatch = useDispatch();

    const handelChangeQuantatiy = (value: number) => {
        dispatch(changeQuantity({ id: item.id, quantity: value }))
    }
    return (
        <Box ml={2} sx={{ width: { xs: '100%', md: '100%' } }}>
            <Stack width={"100%"} sx={{ flexDirection: { xs: 'column', md: 'row' } }} justifyContent={"space-between"} alignItems={'center'} borderRadius={3} bgcolor={'#FFFFFF'} mb={2} boxShadow={'0px 4px 12px rgba(0, 0, 0, 0.05)'} >
                <Stack spacing={1} direction={'row'} justifyContent={'start'} alignItems={'center'} p={2}  >
                    <Box width={"6rem"} overflow={'hidden'} height={"6rem"}

                        sx={{
                            borderRadius: 3,
                        }}>
                        <img
                            width={"100%"}
                            src={item.images[0]}
                            alt="item" />
                    </Box>
                    <Typography variant="body1" fontWeight={'500'}>
                        {item.title}
                        <Typography variant="body2" color="#9d9d9d" fontWeight={'500'}>
                            Color: Optic White, Size: M
                        </Typography>
                    </Typography>

                </Stack>
                <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} mb={3} px={2} spacing={6} >
                    <Typography width={'120px'} variant="body2" color={"#6B7280"}>
                        <NumberSpinner
                            min={1}
                            max={5}
                            size="small"
                            defaultValue={item.quantity}
                            value={item.quantity}
                            onChange={(value) => handelChangeQuantatiy(value ?? 1)}
                            error={false}

                        />
                    </Typography>
                    <Typography pt={3} px={1} variant="h6" fontWeight={700} > ${item.price.toFixed(2)}</Typography>
                    <Typography onClick={() => {
                        dispatch(removeFromCart(item.id))
                    }} pt={3} color="error" sx={{ cursor: "pointer", "textTransform": "none", fontSize: "22px", fontWeight: '550', '&:hover': { textDecoration: 'underline', color: 'red' } }}><DeleteOutline /></Typography>
                </Stack>
            </Stack>
        </Box>
    )
}

export default CartItem
