import { DeleteOutline, Edit, History, HomeOutlined, Logout, PaymentOutlined, Person2Outlined, TrackChanges } from "@mui/icons-material"
import { Avatar, Box, Button, Divider, Stack, TextField, Typography } from "@mui/material"
import { useNavigate } from "react-router"
import { logOut } from '../store/auth/authSlice';
import { useAppSelector, useAppDispatch } from "../store/hooks"
import { useStartTopScreen } from "../hooks/useStartTopScreen"
import useToster from "../hooks/useToster";
import { confirm } from "../components/shared/ConfairmAction";
const ProfilePage = () => {

  useStartTopScreen()

  const navigate = useNavigate()
  const { user } = useAppSelector((state) => state.auth)
  const dispatch = useAppDispatch()

  const { toastify } = useToster();

  return (
    <>
      <Stack m={5} gap={5} sx={{ m: { md: 5, xs: 0 }, mt: { md: 5, xs: 3 }, gap: { md: 5, xs: 1 } }} direction={'row'}>
        <Box sx={{ ml: { xs: "0", md: 0 }, width: { xs: '15%', md: '25%', }, border: '1px solid #d8d7d7', bgcolor: "#FFF", borderRadius: 3, p: 1, height: { xs: '1350px', md: '820px' } }}>
          <Stack p={1} direction={'row'} gap={1} alignItems={'center'}>
            <Avatar sx={{ width: "50px", height: "50px", bgcolor: 'primary.main' }}>
              <img src={user?.avatar} alt="avatar" />
            </Avatar>
            <Box sx={{ display: { md: 'block', xs: "none" } }}>
              <Typography variant="body1" fontWeight={'600'} sx={{ letterSpacing: '0 !important' }}>{user?.name}</Typography>
              <Typography variant="body2" fontWeight={'530'} color="#4B5563" sx={{ letterSpacing: '0 !important' }}>{user?.email}</Typography>

            </Box>

          </Stack>
          <Divider sx={{ width: { md: '100%', xs: '100%' }, my: 2 }} />
          <Box textAlign={'left'}>
            <Stack direction={'row'} spacing={2} bgcolor={'#E7F2FD'} borderRadius={2} p={2} color={'#1396F1'} mt={2}>
              <Person2Outlined />
              <Typography sx={{ display: { md: 'block', xs: "none" } }} variant="body1" color="inherit">My Profile</Typography>
            </Stack>

            <Stack direction={'row'} spacing={2} borderRadius={2} bgcolor={'inherit'} p={2} color={'#333'} mt={2} sx={{ cursor: 'pointer', transition: "all 0.1s ease-in", '&:hover': { bgcolor: "#F3F4F6" } }}>
              <History />
              <Typography sx={{ display: { md: 'block', xs: "none" } }} variant="body1" color="inherit">Order History</Typography>
            </Stack>
            <Stack direction={'row'} borderRadius={2} spacing={2} bgcolor={'inherit'} p={2} color={'#333'} mt={2} sx={{ cursor: 'pointer', transition: "all 0.1s ease-in", '&:hover': { bgcolor: "#F3F4F6" } }} >
              <TrackChanges />
              <Typography variant="body1" sx={{ display: { md: 'block', xs: "none" } }} color="inherit">Track Shipments</Typography>
            </Stack>
            <Stack direction={'row'} borderRadius={3} spacing={2} p={2} bgcolor={'inherit'} color={'#333'} mt={2} sx={{ cursor: 'pointer', transition: "all 0.1s ease-in", '&:hover': { bgcolor: "#F3F4F6" } }}>
              <HomeOutlined />
              <Typography variant="body1" sx={{ display: { md: 'block', xs: "none" } }} color="inherit">Shipping Addresses</Typography>
            </Stack>
            <Stack direction={'row'} borderRadius={3} spacing={2} p={2} bgcolor={'inherit'} color={'#333'} mt={2} sx={{ cursor: 'pointer', transition: "all 0.1s ease-in", '&:hover': { bgcolor: "#F3F4F6" } }}>
              <PaymentOutlined />
              <Typography variant="body1" sx={{ display: { md: 'block', xs: "none" } }} color="inherit">Payment Methods</Typography>
            </Stack>

          </Box>
          <Stack direction={'row'} borderRadius={3} spacing={2} p={2} bgcolor={'inherit'} color={'#333'} mt={3} sx={{ cursor: 'pointer', transition: "all 0.1s ease-in", '&:hover': { bgcolor: "#F3F4F6" } }}>
            <Logout />
            <Typography onClick={async () => {

              const logout = await confirm({ message: 'Are you sure you want to logout?' })
              if (logout) {
                dispatch(logOut())
                toastify({ type: 'success', message: 'Logout successfully' })
                navigate('/login')
              }
            }} variant="body1" sx={{ display: { md: 'block', xs: "none" } }} color="inherit">Logout</Typography>
          </Stack>
        </Box>
        <Box width={'100%'}>
          <Box sx={{ ml: { xs: 0, md: 0 }, width: { md: '95%', xs: '80%', }, border: '1px solid #d8d7d7', bgcolor: "#FFF", borderRadius: 3, p: 4, height: 'auto' }}>
            <Typography variant="h5" fontWeight={'700'} sx={{ letterSpacing: '0 !important' }}>My Profile</Typography>
            <Typography variant="body2" fontWeight={'530'} color="#4B5563" sx={{ letterSpacing: '0 !important' }}>Manage your personal information and password.</Typography>
            <Divider sx={{ width: { md: '100%', xs: '100%' }, my: 3 }} />

            <Box>
              <Stack mb={3} sx={{ flexDirection: { md: 'row', xs: 'column' }, width: { md: '100%', xs: '100%' } }} gap={5}>
                <Stack width={'100%'}>
                  <label style={{ fontSize: "18px", fontWeight: '500', color: "#111418" }} htmlFor="outlined-basic">Full Name</label>
                  <TextField sx={{ width: '100%', mt: 1.5 }} type="text" id="outlined-basic" value={user?.name} variant="outlined" />
                </Stack>
                <Stack width={'100%'}>
                  <label style={{ fontSize: "18px", fontWeight: '500', color: "#111418" }} htmlFor="outlined-basic">Email Address</label>
                  <TextField sx={{ width: '100%', mt: 1.5 }} type="email" id="outlined-basic" value={user?.email} variant="outlined" />
                </Stack>
              </Stack>
              <Stack sx={{ flexDirection: { md: 'row', xs: 'column' }, width: { md: '100%', xs: '100%' } }} alignItems={'center'} gap={5}>
                <Stack sx={{ width: { md: '40%', xs: '100%' } }}>
                  <label style={{ fontSize: "18px", fontWeight: '500', color: "#111418" }} htmlFor="outlined-basic">Phone Number</label>
                  <TextField sx={{ width: '100%', mt: 1.5 }} type="text" id="outlined-basic" value={'+249 111988308'} variant="outlined" />
                </Stack>
                <Button variant="contained" sx={{ height: "50px", mt: 3.5, color: "#111418", fontWeight: "500", boxShadow: 'none', bgcolor: '#e3e5e9', textTransform: 'none', width: { md: '200px', xs: '100%' }, borderRadius: 2 }}>Change Password</Button>

              </Stack>
              <Divider sx={{ width: "100%", my: 2.5 }} />

              <Stack sx={{ width: { md: '100%', xs: '100%' } }} direction={'row'} justifyContent={'flex-end'}>
                <Stack direction={'row'} gap={1}>
                  <Button variant="outlined" sx={{ width: 'auto', border: '1px solid #c9c9c9', textTransform: "capitalize", color: '#111418', px: 4, py: 1.5, borderRadius: 3, bgcolor: 'inherit', boxShadow: 'none' }}>Cancel</Button>
                  <Button variant="contained" sx={{ width: 'auto', textTransform: "capitalize", color: '#fff', px: 4, py: 1.5, borderRadius: 3, bgcolor: '#2A8CEE', boxShadow: 'none' }}>Save Changes</Button>
                </Stack>
              </Stack>
            </Box>

          </Box>
          <Box mt={4} sx={{ ml: { xs: "0", md: 0 }, width: { md: '95%', xs: '80%', }, border: '1px solid #d8d7d7', bgcolor: "#FFF", borderRadius: 3, p: 4, height: 'auto' }}>
            <Stack sx={{ flexDirection: { md: 'row', xs: "column" } }} justifyContent={'space-between'} gap={2}>
              <Box>
                <Typography variant="h5" fontWeight={'700'} sx={{ letterSpacing: '0 !important' }}>Shipping Addresses</Typography>
                <Typography variant="body2" fontWeight={'530'} color="#4B5563" sx={{ letterSpacing: '0 !important' }}>Manage your saved shipping addresses.</Typography>
              </Box>
              <Button variant="contained" sx={{ width: { md: 'auto', xs: "200px" }, textTransform: "capitalize", color: '#fff', px: 3, borderRadius: 3, bgcolor: '#2A8CEE', boxShadow: 'none' }}><Typography mr={1} variant="h4" color="#FFFFFF">+</Typography> Add New Address</Button>
            </Stack>
            <Divider sx={{ width: "100%", my: 3 }} />
            <Stack sx={{ flexDirection: { md: 'row', xs: "column" }, }} gap={2}>
              <Box sx={{ width: { xs: '95%', md: '100%', }, border: '1px solid #d8d7d7', bgcolor: "#F6F7F8", borderRadius: 3, p: 2, height: 'auto' }}>
                <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                  <Box>
                    <Typography variant="h6" fontWeight={'600'} sx={{ letterSpacing: '0 !important' }}>Primary Address</Typography>
                    <Typography variant="body1" fontWeight={'530'} color="#4B5563" sx={{ letterSpacing: '0 !important' }}>Ana Taylor</Typography>
                  </Box>
                  <Stack direction={'row-reverse'} gap={3}>
                    <Typography pt={3} color="#848c96" sx={{ cursor: "pointer", "textTransform": "none", fontSize: "22px", fontWeight: '550', '&:hover': { textDecoration: 'underline', color: 'red' } }}><DeleteOutline /></Typography>
                    <Typography pt={3} color="#848c96" sx={{ cursor: "pointer", "textTransform": "none", fontSize: "22px", fontWeight: '550', '&:hover': { textDecoration: 'underline', color: 'info.main' } }}><Edit /></Typography>
                  </Stack>
                </Stack>
                <Stack mt={2}>
                  <Typography variant="body1" color="#848c96"> 123 Market St.</Typography>
                  <Typography variant="body1" color="#848c96">San Francisco, CA 94103</Typography>
                  <Typography variant="body1" color="#848c96">United States</Typography>
                </Stack>
              </Box >
              <Box sx={{ width: { xs: '95%', md: '100%', }, border: '1px solid #d8d7d7', bgcolor: "#F6F7F8", borderRadius: 3, p: 2, height: '150px' }}>
                <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                  <Box>
                    <Typography variant="h6" fontWeight={'600'} sx={{ letterSpacing: '0 !important' }}>Work Address</Typography>
                    <Typography variant="body1" fontWeight={'530'} color="#4B5563" sx={{ letterSpacing: '0 !important' }}>Ana Taylor</Typography>
                  </Box>
                  <Stack direction={'row-reverse'} gap={3}>
                    <Typography pt={3} color="#848c96" sx={{ cursor: "pointer", "textTransform": "none", fontSize: "22px", fontWeight: '550', '&:hover': { textDecoration: 'underline', color: 'red' } }}><DeleteOutline /></Typography>
                    <Typography pt={3} color="#848c96" sx={{ cursor: "pointer", "textTransform": "none", fontSize: "22px", fontWeight: '550', '&:hover': { textDecoration: 'underline', color: 'info.main' } }}><Edit /></Typography>
                  </Stack>
                </Stack>
                <Stack mt={2}>
                  <Typography variant="body1" color="#848c96"> 456 Tech Ave, Suite 200</Typography>
                  <Typography variant="body1" color="#848c96">Palo Alto, CA 94301</Typography>
                  <Typography variant="body1" color="#848c96">United States</Typography>
                </Stack>
              </Box >
            </Stack>
          </Box>
        </Box>

      </Stack>
    </>
  )
}

export default ProfilePage