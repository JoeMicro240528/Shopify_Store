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
import SearchFiled from './SearchFiled';
import CardBadge from './CardBadge';

import { useNavigate } from 'react-router';

const pages = ['Home', 'Categories', 'All Products'];
const settings = ['Profile', 'Logout'];

function Navbar() {
  
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
                        onClick={()=>{
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
                                        onClick={()=>{
                                       navgate(`/${page.toLowerCase()}`)
                                  }}
                                    sx={{ textAlign: 'center' }} >
                                       {page}
                                    </Typography>
                                </MenuItem>
                            ))}
                            <MenuItem >
                                <Typography sx={{ textAlign: 'center' }}><SearchFiled /></Typography>
                            </MenuItem>
                        </Menu>
                    </Box>
                    <Storefront color='primary' fontSize='large' sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                                 onClick={()=>{
                                       navgate(`/`)
                                  }}
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                     Shopify
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, }}>
                        {pages.map((page) => (
                            <Button
                                          
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'black', fontWeight: '500', textTransform: 'capitalize', fontSize: '15px', display: 'block', transition: 'color 0.3s', '&:hover': { color: 'primary.main' } }}
                            >
                             <Typography
                                onClick={()=>{
                                       navgate(`/${page.toLowerCase()}`)
                                  }}
                             color="initial">
                                {page}
                             </Typography>
                            </Button>
                        ))}
                    </Box>
                    <Box sx={{ flexGrow: 0, mr: 2, display: { xs: 'none', md: 'block' } }}>
                        <SearchFiled />
                    </Box>
                    <Box
                      onClick={()=>{
                                       navgate(`/favorit`)
                                  }}
                    sx={{ flexGrow: 0, fontSize: { xs: "5px" }, mr: { md: 2, xs: 0.5 } }}>
                       
                              <CardBadge Icon={<FavoriteBorder />}  />
                    </Box>
                    <Box 
                       onClick={()=>{
                                       navgate(`/cart`)
                                  }}
                    sx={{ flexGrow: 0, mr: { md: 2, xs: 0.5 }, fontSize: { xs: "5px" } }}>
                           <CardBadge Icon={<ShoppingCartIcon />} />

                    </Box>
                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Yousef Albushra" src="/static/images/avatar/2.jpg" />
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
                                    onClick={()=>{
                                       navgate(`/${setting.toLowerCase()}`)
                                  }}
                                    >{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Navbar;
