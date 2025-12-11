import { Google, Storefront } from "@mui/icons-material"
import { Container, Box, Typography, Button, Divider, Stack, FormControl, TextField, IconButton, InputAdornment, OutlinedInput, FormControlLabel, Checkbox } from "@mui/material"
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import React from "react";

const RegisterPage = () => {
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
      <Container>
        <Box sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          gap: 2,
          p: 2

        }}>
          <Storefront color='primary' fontSize='large' sx={{ display:'flex', mr: 1 }} />
          <Typography
            variant="h4"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
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
        {/* <Divider /> */}

        <Box textAlign={'center'} sx={{ m: '0 auto', mt:2, height: 'auto', width:{ xs: '80%', md: '35%' }, border: '1px solid #e4e4e4', bgcolor: "#FFF", borderRadius: 3, p: 4, }}>
          <Typography variant="h4" fontWeight={'700'} sx={{ letterSpacing: '0 !important' }}>Create Your Account</Typography>
          <Typography variant="body1" fontWeight={'530'} color="#4B5563" sx={{ letterSpacing: '0 !important' }}>Start your shopping journey with us.</Typography>
         <Button variant="outlined" sx={{ width: '100%', border: '1px solid #c9c9c9', textTransform: "capitalize", color: '#000', mt: 5, px: 4, py: 1.5, borderRadius: 3, bgcolor: 'inherit', '&:hover': { opacity: '0.7' } }}><Google /> Sign up with Google</Button>

          <Stack sx={{
            my: 3,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 2,
          }}>
            <Divider sx={{ width: "150px" }} />
            <Typography variant="body2" color="initial">OR</Typography>
            <Divider sx={{ width: "150px" }} />
          </Stack>
          <FormControl sx={{ textAlign: 'left' }}>
            <Stack direction={'column'} gap={3}>
              <Stack>
                <label style={{ fontSize: "18px", fontWeight: '500' }} htmlFor="outlined-basic">Full Name</label>
                <TextField sx={{ width: '100%', mt: 1.5 }} type="text" id="outlined-basic" placeholder="Enter Your Full Name" variant="outlined" />
              </Stack>
              <Stack>
                <label style={{ fontSize: "18px", fontWeight: '500' }} htmlFor="outlined-basic">Email Address</label>
                <TextField sx={{ width: '100%', mt: 1.5 }} type="email" id=" outlined-basic" placeholder="Enter Your Email Address" variant="outlined" />
              </Stack>
              <Stack>
                <FormControl  sx={{ width: '100%' }} variant="outlined">
                   <label style={{ fontSize: "18px", fontWeight: '500', marginBottom:"10px" }} htmlFor="outlined-adornment-password">Password</label>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    placeholder="Confirm Your Password"
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
              <Stack>
                  <FormControl  sx={{ width: '100%' }} variant="outlined">
                   <label style={{ fontSize: "18px", fontWeight: '500', marginBottom:"5px" }} htmlFor="outlined-adornment-password">Confirm Password</label>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    placeholder="Confirm Your Password"
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
               <Stack width={'85%'} direction={'row'} alignItems={'end'} >
                    <FormControlLabel sx={{m:0}} control={<Checkbox />} label={undefined} />   
                    <Typography  variant="body2" fontSize={'13px'} color="initial">
                      By creating an account, you agree to our <a href="#" style={{color:"#2A8CEE"}}>Terms of Service</a> and <a href="#" style={{color:"#2A8CEE"}}>Privacy Policy</a>.
                    </Typography>
               </Stack>

                  <Button variant="contained" sx={{ width: '100%', textTransform: "capitalize", color: '#ffffff', my: 1, px: 4, py: 1.5,fontSize:"15px", borderRadius: 3,fontWeight:'bold', bgcolor: '#2A8CEE', '&:hover': { opacity: '0.7' } }}>Create Account</Button>
                  <Typography variant="body1" textAlign={'center'} color="initial">Already have an account?<Typography component={'a'} href="#" sx={{color:"#2A8CEE",fontWeight:"600",textDecoration:'none','&:hover':{textDecoration:'underline'}}}> Login </Typography></Typography>
            </Stack>

          </FormControl>
        </Box>
      </Container>
    </>
  )
}

export default RegisterPage
