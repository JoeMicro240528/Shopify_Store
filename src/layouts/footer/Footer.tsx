import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";

const Footer = () => {
  return (
    <>
    <Box sx={{ backgroundColor: '#F1F5F9' , color:'rgb(0, 0, 0)',}}>
        <Box mt={10}  sx={{
            display:{sx:'block', md:"flex"},
            justifyContent:'space-around',
             flexDirection:'row',
              padding:{xs:'10px', md:"30px"},
         }}>
          <Stack sx={{
             display:'flex',
             gap:'20px',
             flex:'column',
          }}>
            <Typography variant="h5" mt={2} fontWeight={'bold'}>
             Join Our Newsletter
            </Typography>
            <Typography variant="body2" color="#6474A7">
             Get the latest updates on new products and upcoming sales.
            </Typography>
             <Stack>
                 <Box sx={{ width: 600, maxWidth: '100%',  display:{sx:'block', md:"flex"}, gap:'10px' }}>
                    <TextField fullWidth label="Your Email Address" />
                    <Button   variant="contained" sx={{
                        width:{xs:'90%', md:"150px"},
                         margin:{xs:'20px', md:"0"},

                    }}>Subscribe</Button>
                </Box>
             </Stack>
          </Stack>
          <Stack>
            <Typography variant="h5" mt={2} fontWeight={'bold'}>
                Company
            </Typography>
            <Box mt={3} sx={{
                     display:'flex',
                    flexDirection:'column',
                     gap:'10px',
                     cursor:'pointer'
            }}  >
                <Typography variant="body1" fontWeight={'500'} color="#64748B" sx={{'&:hover':{color:'primary.main'}}}>
             About Us
            </Typography>
            <Typography variant="body1" fontWeight={'500'} color="#64748B" sx={{'&:hover':{color:'primary.main'}}}>
             Contact
            </Typography>
            <Typography variant="body1" fontWeight={'500'} color="#64748B" sx={{'&:hover':{color:'primary.main'}}}>
             FAQ
            </Typography>
            <Typography variant="body1" fontWeight={'500'} color="#64748B" sx={{'&:hover':{color:'primary.main'}}}>
            Shipping Policy
            </Typography>
            </Box>
          </Stack>
          <Stack >
            <Typography variant="h5" mt={2} fontWeight={'bold'}>
                Follow Us
            </Typography>
              <Box mt={3} sx={{
                     display:'flex',
                    flexDirection:'row',
                     gap:'10px',
                     cursor:'pointer'
            }}  >
            <Typography variant="body1" fontWeight={'500'} color="#64748B" sx={{'&:hover':{color:'primary.main'}}}>
            <Facebook/>
            </Typography>
            <Typography variant="body1" fontWeight={'500'} color="#64748B" sx={{'&:hover':{color:'primary.main'}}}>
            <Twitter/>
            </Typography>
            <Typography variant="body1" fontWeight={'500'} color="#64748B" sx={{'&:hover':{color:'primary.main'}}}>
             <Instagram/>
            </Typography>
            </Box>
          </Stack>
        </Box>
        <Typography textAlign={'center'} py={5} color="#64748B">
            © 2024 ShopVerse. All rights reserved.
        </Typography>
        </Box>
    </>
  );
};

export default Footer;