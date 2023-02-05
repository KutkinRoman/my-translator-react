import {Container, Grid, styled} from '@mui/material';
import React from 'react';
import SourceTextComponent from "../componets/translator/SourceTextComponent";
import MultiTextComponent from "../componets/translator/MultiTextComponent";
import NavBar from "../componets/nav-bar/NavBar";

const MainPage = () => {
    const id = (id: string) => `mainPage${id}`

    return (
        <WrapperStyled id={id('Wrapper')}>
            <NavBar/>
            <ContainerStyled id={id('Container')}>
                <Grid container spacing={2} id={'Grid'}>
                    <Grid item xs={6}>
                        <SourceTextComponent/>
                    </Grid>
                    <Grid item xs={6}>
                        <MultiTextComponent/>
                    </Grid>
                </Grid>
            </ContainerStyled>
        </WrapperStyled>
    );
};

const WrapperStyled = styled('div')({

});

const ContainerStyled = styled(Container)({
    paddingTop: 25,
    paddingBottom: 25,
});


export default MainPage;