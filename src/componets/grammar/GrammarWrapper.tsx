import React from 'react';
import Background, {BackgroundProps} from "../background/Background";
import {Container, Grid} from "@mui/material";
import SpeedDial from "../speed-dial/SpeedDial";
import NavBar from "../nav-bar/NavBar";

const GrammarWrapper = ({children, ...props}: BackgroundProps) => {
    return (
        <Background {...props}>
            <NavBar/>
            <Container>
                <Grid container spacing={1}>
                    {children}
                </Grid>
            </Container>
            <SpeedDial/>
        </Background>
    );
};

export default GrammarWrapper;