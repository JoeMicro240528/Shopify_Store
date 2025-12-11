import { Storefront } from "@mui/icons-material"
import { Box, Button, Container, FormControl, IconButton, InputAdornment, OutlinedInput, Stack, TextField, Typography } from "@mui/material"
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import React from "react";



const LoginPage = () => {

  const [showPassword, setShowPassword] = React.useState(false);
  
    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
    };
  
    const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
    };

  return (
    <>
      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'start',
        gap: 2,
        p: 2

      }}>
        <Storefront color='primary' fontSize='large' sx={{ display: 'flex', mr: 0 }} />
        <Typography
          variant="h4"
          noWrap
          component="a"
          href="#app-bar-with-responsive-menu"
          sx={{
            mr: 1,
            display: 'flex',
            fontFamily: 'monospace',
            fontWeight: '900',
            color: 'inherit',
            textDecoration: 'none',

          }}
        >
          Shopify
        </Typography>
      </Box>
      <Container>
        <Box textAlign={'center'}>
          <Typography variant="h4" fontWeight={'800'} sx={{ letterSpacing: '0 !important' , mb:1}}>Welcome Back</Typography>
          <Typography variant="body1" fontWeight={'530'} color="#4B5563" sx={{ letterSpacing: '0 !important' }}>Log in to your account to continue shopping.</Typography>
        </Box>
        <Box textAlign={'left'} sx={{ m: '0 auto', mt: 2, height: 'auto', width: { xs: '80%', md: '35%' }, border: '1px solid #e4e4e4', bgcolor: "#FFF", borderRadius: 3, p: 4, }}>
             <FormControl sx={{ textAlign: 'left',width:'100%' }} >
              <Stack direction={'column'} gap={3}>
              <Stack>
                <label style={{ fontSize: "17px", fontWeight: '600' }} htmlFor="outlined-basic">Email or Username</label>
                <TextField sx={{ width: '100%', mt: 1.5 }} id="outlined-basic" type="email" placeholder="Enter your email or username" variant="outlined" />
              </Stack>
               <Stack>
                <FormControl  sx={{ width: '100%' }} variant="outlined">
                   <label style={{ fontSize: "17px", fontWeight: '600', marginBottom:"10px" }} htmlFor="outlined-adornment-password">Password</label>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    placeholder="Enter your password"
                    type={showPassword ? 'text' : 'password'}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label={
                            showPassword ? 'hide the password' : 'display the password'
                          }
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          onMouseUp={handleMouseUpPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </Stack>
              <Typography variant="body1" textAlign={'right'} color="initial"><Typography component={'a'} href="#" sx={{color:"#2A8CEE",fontWeight:"600",textDecoration:'none','&:hover':{textDecoration:'underline'}}}> Forgot Password? </Typography></Typography>
              <Button variant="contained" sx={{ width: '100%', textTransform: "capitalize", color: '#ffffff', my: 1, px: 4, py: 1.5,fontSize:"15px", borderRadius: 3,fontWeight:'bold', bgcolor: '#2A8CEE', '&:hover': { opacity: '0.7' } }}>Log in</Button>
              </Stack>
             </FormControl>
        </Box>
          <Typography variant="body1" textAlign={'center'}  my={3} color="#9a9898">Don't have an account? <Typography component={'a'} href="#" sx={{color:"#2A8CEE",fontWeight:"600",textDecoration:'none','&:hover':{textDecoration:'underline'}}}> Sign Up </Typography></Typography>
      </Container>
    </>
  )
}

export default LoginPage
