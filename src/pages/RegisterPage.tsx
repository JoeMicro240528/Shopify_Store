import React from "react";
import { Google } from "@mui/icons-material"
import { Container, Box, Typography, Button, Divider, Stack, FormControl, TextField, IconButton, InputAdornment, OutlinedInput, Checkbox } from "@mui/material"
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useForm, type SubmitHandler } from "react-hook-form"
import { SingUpSchema, type ISingUpSchema } from "../validation/SingUpSchema";
import { zodResolver } from '@hookform/resolvers/zod'
import { useAppDispatch, useAppSelector } from "../store/hooks";
import registerUser from "../store/auth/thunk/registerUser";
import { Navigate, useNavigate } from "react-router";
import { resetUI } from "../store/auth/authSlice";
import { usePasswordToggel } from "../hooks/usePasswordToggel";
import { useStartTopScreen } from "../hooks/useStartTopScreen"
interface IFormInput extends ISingUpSchema { }

const RegisterPage = () => {

  useStartTopScreen()

  const { loading, error } = useAppSelector(state => state.auth)
  const dispatch = useAppDispatch()
  const navgait = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>({
    mode: 'onBlur',
    resolver: zodResolver(SingUpSchema),
  })

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    const avatar = "https://picsum.photos/800"
    const { name, email, password } = data
    dispatch(registerUser({ name, email, password, avatar })).unwrap().then(
      () => navgait('/login')
    )

  }

  React.useEffect(() => {

    return () => {
      dispatch(resetUI())
    }
  }, [dispatch])

  const { showPassword, handleClickShowPassword, handleMouseDownPassword, handleMouseUpPassword } = usePasswordToggel()


  const { access_token } = useAppSelector((state) => state.auth)

  if (access_token) {
    return <Navigate to="/" />
  }

  return (
    <>
      <Container sx={{ mt: 5 }} >

        <Box textAlign={'center'} sx={{ m: ' auto', mt: 2, height: 'auto', width: { xs: '80%', md: '35%' }, border: '1px solid #e4e4e4', bgcolor: "#FFF", borderRadius: 3, p: 4, }}>
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
          <FormControl onSubmit={handleSubmit(onSubmit)} sx={{ textAlign: 'left' }}>
            <Stack direction={'column'} gap={3}>
              <Stack>
                <label style={{ fontSize: "18px", fontWeight: '500' }} htmlFor="outlined-basic">Full Name</label>
                <TextField {...register('name')} error={errors.name ? true : false} helperText={errors.name?.message} sx={{ width: '100%', mt: 1.5 }} type="text" id="outlined-basic" placeholder="Enter Your Full Name" variant="outlined" />
              </Stack>
              <Stack>
                <label style={{ fontSize: "18px", fontWeight: '500' }} htmlFor="outlined-basic">Email Address</label>
                <TextField {...register('email')} error={errors.email ? true : false} helperText={errors.email?.message} sx={{ width: '100%', mt: 1.5 }} type="email" id=" outlined-basic" placeholder="Enter Your Email Address" variant="outlined" />
              </Stack>
              <Stack>
                <FormControl sx={{ width: '100%' }} variant="outlined">
                  <label style={{ fontSize: "18px", fontWeight: '500', marginBottom: "10px" }} htmlFor="outlined-adornment-password">Password</label>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    placeholder="Confirm Your Password"
                    type={showPassword ? 'text' : 'password'}
                    {...register('password')}
                    error={errors.password ? true : false}

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
                  <Typography variant="body2" fontSize={'13px'} color="error.main">
                    {errors.password?.message}
                  </Typography>
                </FormControl>
              </Stack>
              <Stack>
                <FormControl sx={{ width: '100%' }} variant="outlined">
                  <label style={{ fontSize: "18px", fontWeight: '500', marginBottom: "5px" }} htmlFor="outlined-adornment-password">Confirm Password</label>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    placeholder="Confirm Your Password"
                    type={showPassword ? 'text' : 'password'}
                    {...register('confirmPassword')}
                    error={errors.confirmPassword ? true : false}
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
                  <Typography variant="body2" fontSize={'13px'} color="error.main">
                    {errors.confirmPassword?.message}
                  </Typography>
                </FormControl>
              </Stack>
              <Stack width={'85%'} direction={'row'} alignItems={'end'} >
                {/* <FormControlLabel sx={{ m: 0 }} control={<Checkbox {...register('agreeTerms')} />} label={undefined} /> */}
                <FormControl>
                  <Stack direction={'row'} spacing={1}>
                    <Checkbox {...register('agreeTerms')} sx={{ m: 0 }} />
                    <label>By creating an account, you agree to our <a href="#" style={{ color: "#2A8CEE" }}>Terms of Service</a> and <a href="#" style={{ color: "#2A8CEE" }}>Privacy Policy</a>.</label>
                  </Stack>
                  <Typography variant="body2" fontSize={'13px'} color="error.main">
                    {errors.agreeTerms?.message}
                  </Typography>
                </FormControl>
              </Stack>

              <Button disabled={loading == "pending" ? true : false} onClick={handleSubmit(onSubmit)} variant="contained" sx={{ width: '100%', textTransform: "capitalize", color: '#ffffff', my: 1, px: 4, py: 1.5, fontSize: "15px", borderRadius: 3, fontWeight: 'bold', bgcolor: '#2A8CEE', '&:hover': { opacity: '0.7' } }}>{loading == "pending" ? "Loading..." : "Create Account"}</Button>
              <Typography variant="body1" textAlign={'center'} color="initial">Already have an account?<Typography component={'a'} onClick={() => navgait('/login')} sx={{ color: "#2A8CEE", fontWeight: "600", textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}> Login </Typography></Typography>
            </Stack>
            {error && <Typography variant="body2" color="error.main">{error}</Typography>}
          </FormControl>
        </Box>
      </Container>
    </>
  )
}

export default RegisterPage
