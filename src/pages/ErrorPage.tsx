import { ArrowBack, CheckCircleOutline, Refresh, Storefront } from "@mui/icons-material"
import { Box, Button, Container, Divider, Stack, Typography } from "@mui/material"

const ErrorPage = () => {
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
            <img width={'100%'} src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4GfBmM4IpCWM6UuPRg66XeTQyRgOTylZjnQwbyP1YEa1Y4Nq2gPToHwNALaTsiMJgW_Cej0FtkYtErmpfS5HuPYA6M8v8JiZ6jR_bWgyYYVToaA3Dppvuw7hkFbgS9Oo-GMj_EtskEeig1I9mRGadLw92_9GwbLWj1olWSo8Pz1fAB3Zk9jQxCC6VCuWGXIil9axpzkW79x4XIZBOu13lA_faNB1Rn0BTyt60jLAcU02w4VcOEN3C5IRUM2-t6uqIAThUu-bYgj8" alt="" />
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
              Go to Homepage
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
          <Typography color="#94a3b8" variant="body2">Error Code: 404</Typography>
        </Box>
      </Container>
    </>
  )
}

export default ErrorPage