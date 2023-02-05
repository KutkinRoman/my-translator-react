import {AppBar, Toolbar, Typography} from '@mui/material';
import React from 'react';

const NavBar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant={'h6'}>
                    My Translator App
                </Typography>
                {/*<IconButton*/}
                {/*    size="large"*/}
                {/*    edge="start"*/}
                {/*    color="inherit"*/}
                {/*    aria-label="menu"*/}
                {/*    sx={{ mr: 2 }}*/}
                {/*>*/}
                {/*</IconButton>*/}
                {/*<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>*/}
                {/*    News*/}
                {/*</Typography>*/}
                {/*<Button color="inherit">Login</Button>*/}
            </Toolbar>
        </AppBar>
    )
};

export default NavBar;