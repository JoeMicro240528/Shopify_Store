import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, CardMedia } from '@mui/material';
import { AddShoppingCart } from '@mui/icons-material';


const Product = () => {
    return (
        <>
            <Card  variant='outlined' sx={{
                    bgcolor:'inherit',
                    border:'none',
                    cursor:'pointer'
                }}>
                <CardContent>
                 <Box   borderRadius={5} sx={
                    {
                        background:"#F7F8F7",
                        overflow:'hidden'
                    }
                 }>
                     <CardMedia
                      sx={{
                           transition:'all 0.3s ease-in-out',
                        '&:hover':{
                          transform:'scale(1.1)'
                        }
                      }}
                        component="img"
                        height="350"
                        image="https://lh3.googleusercontent.com/aida-public/AB6AXuC8PA7brbI9KmO11G3yQ7P4HnG7i2lrPjmyTT1WYhmBfn79Ids4jnumZubygFyjAqFFGhpRMiKBZTMvq4VMy82_8GkCA3cumJrtPeOmSe_4oCJqAXVJQQYy6K_3EhKHuyc7FWef-sgXyqzXIcHGkSj_dMsrhsgSJut7MvEZNMuH_xYVbNaOeXzrmuGsb9NZztnc0imfZtL7G1fSCqhRnQAqKB9GnC1OwdEfFMDML9GQFgNuwD6gSjYWVCVjNe3U_GWJrZ8SUXOWfT8"
                        alt="Paella dish"
                    />
                     <CardActions sx={{display:'flex', justifyContent: 'flex-end'}}>
                     <Button  size="small"sx={{
                        borderRadius:'10%',
                        padding:'7px',
                        bgcolor:'#fff',
                        transition:'all 0.5s',
                        color:'#000',
                        '&:hover':{
                           bgcolor:'primary.main',
                           color:'#fff'
                        }
                        
                     }}><AddShoppingCart /></Button>
                  </CardActions>
                 </Box>
                    <Typography variant="h6" component="div">
                        Classic White Tee
                    </Typography>
                    <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>$35.00</Typography>
                </CardContent>
               
            </Card>
        </>
    )
}

export default Product