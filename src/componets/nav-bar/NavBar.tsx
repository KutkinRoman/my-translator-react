import {AppBar, Box, Button, IconButton, styled, Toolbar, Typography, useTheme} from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import React from 'react';
import {useColorMode} from "../../context/ThemeContext";
import {useNavigate} from "react-router-dom";
import {fadeInDownFunc} from "../animation/animation";

interface NavItem {
    name: string;
    path: string;
}

const navItems: NavItem[] = [
    {
        name: 'Translator',
        path: '/'
    },
    {
        name: 'Grammar',
        path: '/grammar'
    }
]

const NavBar = () => {
    const theme = useTheme()
    const colorMode = useColorMode()
    const navigation = useNavigate()

    return (
        <NavBarWrapper>
            <AppBar position="static">
                <Toolbar>
                    <ToolbarContentStyled>
                        {navItems.map(item => {
                            return (
                                <Button
                                    id={`navItem${item.name}`}
                                    key={`navItem${item.name}`}
                                    variant={'text'}
                                    color={'secondary'}
                                    size={'large'}
                                    onClick={() => navigation(`${item.path}`)}
                                    children={item.name}
                                />
                            )
                        })}
                    </ToolbarContentStyled>
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
    // animation: fadeInDownFunc()
}))

const ToolbarContentStyled = styled(Box)({
    flexGrow: 1
})

export default NavBar;