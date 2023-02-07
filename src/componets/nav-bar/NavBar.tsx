import {AppBar, Box, IconButton, styled, Toolbar, Typography, useTheme} from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import React from 'react';
import {useColorMode} from "../../context/ThemeContext";

const NavBar = () => {

    const theme = useTheme()
    const colorMode = useColorMode()

    return (
        <NavBarWrapper>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant={'h6'}>
                        My Translator App
                    </Typography>
                    <Box style={{flexGrow: 1}}/>
                    <Typography variant={'subtitle1'}>
                        {theme.palette.mode === 'dark' ? 'Dark Mode' : 'Light Mode'}
                    </Typography>
                    <IconButton onClick={colorMode.toggleColorMode} color={'inherit'}>
                        {theme.palette.mode === 'dark' ? <Brightness7Icon/> : <Brightness4Icon/>}
                    </IconButton>
                </Toolbar>
            </AppBar>
        </NavBarWrapper>
    )
};

const NavBarWrapper = styled(Box)(({theme}) => ({
    flexGrow: 1,
    [theme.breakpoints.up('sm')]: {
        paddingBottom: 10
    },
    [theme.breakpoints.up('md')]: {
        paddingBottom: 50
    },
    [theme.breakpoints.up('lg')]: {
        paddingBottom: 100
    },
}))

export default NavBar;