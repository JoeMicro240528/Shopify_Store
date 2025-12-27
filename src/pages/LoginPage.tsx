import { useEffect } from "react";
import { Box, Button, Container, FormControl, IconButton, InputAdornment, OutlinedInput, Stack, TextField, Typography } from "@mui/material"
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useForm, type SubmitHandler } from "react-hook-form"
import { SingInSchema, type ISingInSchema } from "../validation/SingInSchema";
import { zodResolver } from '@hookform/resolvers/zod'
import { useAppDispatch, useAppSelector } from "../store/hooks";
import loginUser from "../store/auth/thunk/loginUser";
import { Navigate, useNavigate } from "react-router";
import getUserData from "../store/auth/thunk/getUserData";
import { resetUI } from "../store/auth/authSlice";
import { usePasswordToggel } from "../hooks/usePasswordToggel";

interface IFormInput extends ISingInSchema { }
const LoginPage = () => {

  const { loading, error } = useAppSelector(state => state.auth)
  const dispatch = useAppDispatch()
  const navgait = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>({
    mode: 'onBlur',
    resolver: zodResolver(SingInSchema),
  })

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    dispatch(loginUser(data)).unwrap().then(
      () => {
        dispatch(getUserData('_'))
        navgait('/')
      }
    )

  }

  useEffect(() => {

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
      <Container>
        <Box mt={5} textAlign={'center'}>
          <Typography variant="h4" fontWeight={'800'} sx={{ letterSpacing: '0 !important', mb: 1 }}>Welcome Back</Typography>
          <Typography variant="body1" fontWeight={'530'} color="#4B5563" sx={{ letterSpacing: '0 !important' }}>Log in to your account to continue shopping.</Typography>
        </Box>
        <Box textAlign={'left'} sx={{ m: '0 auto', mt: 2, height: 'auto', width: { xs: '80%', md: '35%' }, border: '1px solid #e4e4e4', bgcolor: "#FFF", borderRadius: 3, p: 4, }}>
          <FormControl sx={{ textAlign: 'left', width: '100%' }} >
            <Stack direction={'column'} gap={3}>
              <Stack>
                <label style={{ fontSize: "17px", fontWeight: '600' }} htmlFor="outlined-basic">Email or Username</label>
                <TextField  {...register("email")} error={errors.email ? true : false} helperText={errors.email?.message} sx={{ width: '100%', mt: 1.5 }} id="outlined-basic" type="email" placeholder="Enter your email or username" variant="outlined" />
              </Stack>
              <Stack>
                <FormControl sx={{ width: '100%' }} variant="outlined">
                  <label style={{ fontSize: "17px", fontWeight: '600', marginBottom: "10px" }} htmlFor="outlined-adornment-password">Password</label>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    placeholder="Enter your password"
                    type={showPassword ? 'text' : 'password'}
                    {...register("password")} error={errors.email ? true : false}
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
              <Typography variant="body1" textAlign={'right'} color="initial"><Typography component={'a'} href="#" sx={{ color: "#2A8CEE", fontWeight: "600", textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}> Forgot Password? </Typography></Typography>
              <Button disabled={loading == "pending" ? true : false} onClick={handleSubmit(onSubmit)} variant="contained" sx={{ width: '100%', textTransform: "capitalize", color: '#ffffff', my: 1, px: 4, py: 1.5, fontSize: "15px", borderRadius: 3, fontWeight: 'bold', bgcolor: '#2A8CEE', '&:hover': { opacity: '0.7' } }}>{loading == "pending" ? "Loading..." : "Log in"}</Button>
            </Stack>
          </FormControl>
        </Box>
        <Typography variant="body1" textAlign={'center'} my={3} color="#9a9898">Don't have an account? <Typography component={'a'} href="#" sx={{ color: "#2A8CEE", fontWeight: "600", textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}> Sign Up </Typography></Typography>
        {error && <Typography variant="body2" color="error.main">{error}</Typography>}
      </Container>
    </>
  )
}

export default LoginPage
