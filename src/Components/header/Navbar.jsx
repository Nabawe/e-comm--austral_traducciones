import { useState } from 'react';
import { Link } from 'react-router-dom';
// MUI Imports
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MUILink from '@mui/material/Link'
import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// Custom Imports
import css from "./Navbar.module.css";
import CartWidged from './CartWidged';
import g_Styles from "../../style/g_Styles.js";
import logo_small_menu from "../../img/logo-small-menu.png";
import Paths from '../../data/Paths.js'

const pages = Object.keys( Paths );

export default function Navbar() {
    const [anchorElNav, setAnchorElNav] = useState( null );

    const handleOpenNavMenu = ( event ) => {
        setAnchorElNav( event.currentTarget );
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav( null );
    };

    return (
        <AppBar position="static"
            // ? Hay mejor forma de hacer esto? https://mui.com/customization/how-to-customize/
            sx={{ backgroundColor: g_Styles.colors.main }}
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <MUILink
                        component={ Link }
                        to={ '/' }
                        sx={{ textDecoration: 'none', mr: 2, display: { xs: 'none', md: 'flex' } }}
                    >
                        <img className={ css.p_nav__logo } src={ logo_small_menu } alt="Logo" />
                    </MUILink>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
                            open={Boolean( anchorElNav )}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map( ( page ) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <MUILink
                                        component={ Link }
                                        to={ Paths[page].route }
                                        textAlign="center"
                                        color='inherit'
                                        sx={{ textDecoration: 'none' }}
                                    >
                                        {Paths[page].label}
                                    </MUILink>
                                </MenuItem>
                            ) )}
                        </Menu>
                    </Box>

                    <MUILink
                        component={ Link }
                        to={ '/' }
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                    >
                        <img className={ css.p_nav__logo__mobile } src={ logo_small_menu } alt="Logo" />
                    </MUILink>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map( ( page ) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                <MUILink
                                    component={ Link }
                                    to={ Paths[page].route }
                                    textAlign="center"
                                    color='inherit'
                                    sx={{ textDecoration: 'none' }}
                                >
                                    {Paths[page].label}
                                </MUILink>
                            </Button>
                        ) )}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <CartWidged />
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
