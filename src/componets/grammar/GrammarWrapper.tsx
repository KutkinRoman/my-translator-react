import React from 'react';
import Background, {BackgroundProps} from "../background/Background";
import {Container, Grid, styled} from "@mui/material";
import SpeedDial from "../speed-dial/SpeedDial";
import NavBar from "../nav-bar/NavBar";
import {fadeInUpFunc} from "../animation/animation";

const GrammarWrapper = ({children, ...props}: BackgroundProps) => {
    return (
        <Background {...props}>
            <NavBar/>
            <Container>
                <GridStyled container spacing={1}>
                    {children}
                </GridStyled>
            </Container>
            <SpeedDial/>
        </Background>
    );
};

const GridStyled = styled(Grid)({
    animation: fadeInUpFunc()
})

export default GrammarWrapper;