import React from 'react';
import Background from "../componets/background/Background";
import NavBar from "../componets/nav-bar/NavBar";
import {CardContent, Container, Grid, styled} from "@mui/material";
import TypographySmart from "../componets/typography/TypographySmart";
import {CommonCardStyled} from "../componets/common/styled";
import {useNavigate} from "react-router-dom";
import SpeedDial from "../componets/speed-dial/SpeedDial";
import {zoomInFunc} from "../componets/animation/animation";

const GrammarPage = () => {
    return (
        <Background>
            <NavBar/>
            <Container>
                <Grid container spacing={1}>
                    <PageItem path={'to-be-positive'}>
                        <TypographySmart
                            text={'{To be}'}
                            variant={'h5'}/>
                        <TypographySmart
                            text={'(positive)'}
                            variant={'subtitle1'}/>
                    </PageItem>
                    <PageItem path={'to-be-negative'}>
                        <TypographySmart
                            text={'{To be}'}
                            variant={'h5'}/>
                        <TypographySmart
                            text={'(negative)'}
                            variant={'subtitle1'}/>
                    </PageItem>
                    <PageItem path={'to-be-questions-short-answers'}>
                        <TypographySmart
                            text={'{To be}'}
                            variant={'h5'}/>
                        <TypographySmart
                            text={'(questions and short answers)'}
                            variant={'subtitle1'}/>
                    </PageItem>
                </Grid>
                <Grid container spacing={1}>
                    <PageItem path={'present-simple-positive'}>
                        <TypographySmart
                            text={'{Present Simple}'}
                            variant={'h5'}/>
                        <TypographySmart
                            text={'(positive)'}
                            variant={'subtitle1'}/>
                    </PageItem>
                    <PageItem path={'present-simple-negative'}>
                        <TypographySmart
                            text={'{Present Simple}'}
                            variant={'h5'}/>
                        <TypographySmart
                            text={'(negative)'}
                            variant={'subtitle1'}/>
                    </PageItem>
                </Grid>
            </Container>
            <SpeedDial/>
        </Background>
    );
};

interface PageItem {
    path: string;
    children?: React.ReactNode;
}


const PageItem = ({path, children}: PageItem) => {
    const navigate = useNavigate()
    return (
        <Grid item xs={6} sm={6} mb={4} lg={4}>
            <PageItemStyled onClick={() => navigate(path)}>
                <CardContent children={children}/>
            </PageItemStyled>
        </Grid>
    )
}

const PageItemStyled = styled(CommonCardStyled)(({theme}) => ({
    height: 200,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    animation: zoomInFunc(),
    ":hover": {
        cursor: 'pointer',
        boxShadow: `0px 0px 40px 0px rgba(6, 182, 212, 0.5)`,
        transitionDuration: '.4s',
    },
}))

export default GrammarPage;