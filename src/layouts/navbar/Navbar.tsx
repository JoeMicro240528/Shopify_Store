import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Storefront } from '@mui/icons-material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import CardBadge from './CardBadge';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { useNavigate } from 'react-router';
import WishlistBadge from './WishlistBadge';
import { Stack } from '@mui/material';
import { logOut } from '../../store/auth/authSlice';

const pages = ['Home', 'Categories', 'All Products'];
const settings = ['Profile', 'Logout'];

function Navbar() {

    const dispatch = useAppDispatch()

    const { user, access_token } = useAppSelector((state) => state.auth)

    const navgate = useNavigate();

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };



    return (
        <AppBar sx={{ backgroundColor: '#F4F4F5', color: 'black', borderRadius: 20 }} position="static">
            <Container>
                <Toolbar disableGutters>
                    <Storefront color='primary' fontSize='large' sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />

                    <Typography
                        onClick={() => {
                            navgate('/')
                        }}
                        variant="h6"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 'bold',
                            color: 'inherit',
                            textDecoration: 'none',

                        }}
                    >
                        Shopify
                    </Typography>


                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, color: 'black' }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{ display: { xs: 'block', md: 'none' }, }}
                        >
                            {pages.map((page) => (
                                <MenuItem

                                    sx={{ textTransform: 'capitalize' }} color='info' key={page} onClick={handleCloseNavMenu}>
                                    <Typography
                                        onClick={() => {
                                            navgate(`/${page.toLowerCase()}`)
                                        }}
                                        sx={{ textAlign: 'center' }} >
                                        {page}
                                    </Typography>
                                </MenuItem>
                            ))}

                        </Menu>
                    </Box>
                    <Storefront color='primary' fontSize='large' sx={{ display: { xs: 'flex', md: 'none' }, mr: 5 }} />
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, }}>
                        {pages.map((page) => (
                            <Button

                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'black', fontWeight: '500', textTransform: 'capitalize', fontSize: '15px', display: 'block', transition: 'color 0.3s', '&:hover': { color: 'primary.main' } }}
                            >
                                <Typography
                                    onClick={() => {
                                        navgate(`/${page.toLowerCase()}`)
                                    }}
                                    color="initial">
                                    {page}
                                </Typography>
                            </Button>
                        ))}
                    </Box>
                    <Stack direction={'row'} spacing={1}>
                        {
                            access_token ? <>
                                <Box
                                    onClick={() => {
                                        navgate(`/wishlist`)
                                    }}
                                    sx={{ flexGrow: 0, fontSize: { xs: "5px" }, mr: { md: 2, xs: 0.5 } }}>

                                    <WishlistBadge Icon={<FavoriteBorder />} />
                                </Box>
                                <Box
                                    onClick={() => {
                                        navgate(`/cart`)
                                    }}
                                    sx={{ flexGrow: 0, mr: { md: 2, xs: 0.5 }, fontSize: { xs: "5px" } }}>
                                    <CardBadge Icon={<ShoppingCartIcon />} />

                                </Box>
                            </> : null
                        }
                    </Stack>
                    {
                        access_token ?
                            <Box sx={{ flexGrow: 0 }}>
                                <Tooltip title="Open settings">
                                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                        <Avatar alt={user?.name} src={user?.avatar} />
                                    </IconButton>
                                </Tooltip>
                                <Menu
                                    sx={{ mt: '45px' }}
                                    id="menu-appbar"
                                    anchorEl={anchorElUser}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={Boolean(anchorElUser)}
                                    onClose={handleCloseUserMenu}
                                >
                                    {settings.map((setting) => (
                                        <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                            <Typography sx={{ textAlign: 'center' }}
                                                onClick={() => {
                                                    navgate(`/${setting.toLowerCase()}`)
                                                    if (setting.toLowerCase() === 'logout') {
                                                        dispatch(logOut())
                                                        navgate('/login')
                                                    }
                                                }}
                                            >{setting}</Typography>
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </Box>
                            :
                            <Stack sx={{ width: { xs: '60%', md: 'auto' } }} spacing={1} direction={'row'}>
                                <Button onClick={
                                    () => {
                                        navgate('/login')
                                    }
                                } variant="contained" color="primary" sx={{ width: '100%', mt: 1, px: 2, py: 1, borderRadius: 2, bgcolor: 'rgba(59 ,130, 246)', '&:hover': { bgcolor: 'rgba(59 ,130, 246, 0.8)' } }}>
                                    {'Login'.toLowerCase()}
                                </Button>
                                <Button onClick={
                                    () => {
                                        navgate('/register')
                                    }
                                } variant='outlined' sx={{ width: '100%', color: 'primary.main', mt: 1, px: 2, py: 1, borderRadius: 2, '&:hover': { bgcolor: 'rgba(59 ,130, 246)', color: '#FFFFFF' } }}>
                                    {'Register'.toLowerCase()}
                                </Button>
                            </Stack>


                    }
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Navbar;
