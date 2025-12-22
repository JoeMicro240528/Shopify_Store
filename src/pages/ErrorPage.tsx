import { ArrowBack, CheckCircleOutline, Refresh, Storefront } from "@mui/icons-material"
import { Box, Button, Container, Divider, Stack, Typography } from "@mui/material"
import { Link, useRouteError, isRouteErrorResponse } from "react-router"
import LottieHandeller from "../components/shared/LottieHandeller"
const ErrorPage = () => {
  const error = useRouteError();

  let errorStatus: number;
  let errorText: string;

  if (isRouteErrorResponse(error)) {
    errorStatus = error.status;
    errorText = error.statusText
  } else {
    errorStatus = 404;
    errorText = 'Page Not Found';
  }
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
          <Storefront color='primary' fontSize='large' sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: '900',
              color: 'inherit',
              textDecoration: 'none',

            }}
          >
            Shopify
          </Typography>
        </Box>
        <Divider />

        <Box my={10} textAlign={'center'} >
          <Box width={'250px'} m={'0 auto'}>
            <LottieHandeller type="notFound" />
          </Box>
          <Stack width={'40%'} m={'0 auto'} textAlign={'center'}>
            <Typography variant="h5" fontWeight={'900'}>
              Oops! Something went wrong.
            </Typography>
            <Typography variant="body1" fontWeight={'500'} color="#475569">
              The page you were looking for doesn't exist or an unexpected error occurred. Don't worry, let's get you back on track.
            </Typography>
          </Stack>
          <Stack sx={{
            my: '40px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            gap: 2
          }}>
            <Button variant="contained" sx={{ width: '200px', color: "#FFF", borderRadius: 2 }}>
              <Link replace={true} style={{ textDecoration: 'none', color: 'inherit' }} to='/'>Go to home page</Link>
            </Button>
            <Button variant="contained" sx={{ background: "#CBD5E1", color: "#333", width: '200px', borderRadius: 2 }}>
              Contact Support
            </Button>

          </Stack>
          <Divider sx={{ width: '500px', m: '0 auto' }} />

          <Box my={4}>
            <Typography my={2} variant="body1" fontWeight={'600'} >
              Here are a few things you can try:
            </Typography>
            <Stack width={'100%'} m={'0 auto'} fontWeight={'normal'} textAlign={'center'}>
              <Box m={'0 auto'}>
                <Typography color="#8B9397" variant="body2" display={'flex'} gap={2} fontWeight={'normal'} >
                  <CheckCircleOutline color="primary" />   Check the URL for any typos.
                </Typography>
                <Typography color="#8B9397" variant="body2" display={'flex'} gap={2} my={1} fontWeight={'normal'} >
                  <Refresh color="primary" />   Try refreshing the page.
                </Typography>
                <Typography color="#8B9397" variant="body2" display={'flex'} gap={2} fontWeight={'normal'} >
                  <ArrowBack color="primary" />  Go back to the previous page.
                </Typography>
              </Box>
            </Stack>
          </Box>
          <Typography color="#94a3b8" variant="body2">Error Text: {errorText}</Typography>
          <Typography color="#94a3b8" variant="body2">Error Code: {errorStatus}</Typography>
        </Box>
      </Container>
    </>
  )
}

export default ErrorPage