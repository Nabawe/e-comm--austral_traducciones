import { useState } from 'react';
// MUI Imports
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
// Custom Imports
import style from "../../style/style.js";
import css from "./Navbar.module.css";
import logo_small_menu from "../../img/logo-small-menu.png";
import WidgetCart from './WidgetCart';

const pages = ['Contacto', 'Interpretación', 'Traducción'];

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
            sx={{ backgroundColor: style.colors.main }}
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                    >
                        {/* WIP Modificar esto por Button, Link, IconButton o lo q sea correcto, talvez sea necesario q la clase en mobile sea tratada distinta y en vez de especificar el tamaño de la imagen q el contenedor se ajuste al tamaño de la nav y la imagen al tamaño de su contenedor */}
                            {/* Ya me contesto esto pero necesito entender más antes de cambiarlo */}
                        <img className={ css.p_nav__logo } src={ logo_small_menu } alt="Logo" />
                    </Typography>

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
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ) )}
                        </Menu>
                    </Box>

                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                    >
                        {/* WIP Modificar esto por Button, Link, IconButton o lo q sea correcto, talvez sea necesario q la clase en mobile sea tratada distinta y en vez de especificar el tamaño de la imagen q el contenedor se ajuste al tamaño de la nav y la imagen al tamaño de su contenedor */}
                                {/* Ya me contesto esto pero necesito entender más antes de cambiarlo */}
                        <img className={ css.p_nav__logo__mobile } src={ logo_small_menu } alt="Logo" />
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map( ( page ) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page}
                            </Button>
                        ) )}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <WidgetCart />
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
