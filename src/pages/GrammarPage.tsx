import React from 'react';
import Background from "../componets/background/Background";
import NavBar from "../componets/nav-bar/NavBar";
import {CardContent, Container, Grid, styled} from "@mui/material";
import TypographySmart from "../componets/typography/TypographySmart";
import {CommonCardStyled} from "../componets/common/styled";
import {useNavigate} from "react-router-dom";

const GrammarPage = () => {
    const navigate = useNavigate()

    return (
        <Background>
            <NavBar/>
            <Container>
                <Grid container spacing={1}>
                    <Grid item xs={6} sm={6} mb={4} lg={4}>
                        <PageItemStyled onClick={() => navigate('to-be-positive')}>
                            <CardContent>
                                <TypographySmart
                                    text={'{To be} (positive)'}
                                    variant={'h5'}
                                />
                            </CardContent>
                        </PageItemStyled>
                    </Grid>
                    <Grid item xs={6} sm={6} mb={4} lg={4}>
                        <PageItemStyled onClick={() => navigate('to-be-negative')}>
                            <CardContent>
                                <TypographySmart
                                    text={'{To be} (negative)'}
                                    variant={'h5'}
                                />
                            </CardContent>
                        </PageItemStyled>
                    </Grid>
                    <Grid item xs={6} sm={6} mb={4} lg={4}>
                        <PageItemStyled onClick={() => navigate('to-be-questions-short-answers')}>
                            <CardContent>
                                <TypographySmart
                                    text={'{To be}'}
                                    variant={'h5'}
                                />
                                <TypographySmart
                                    text={'(questions and short answers)'}
                                    variant={'h5'}
                                />
                            </CardContent>
                        </PageItemStyled>
                    </Grid>
                </Grid>
            </Container>
        </Background>
    );
};

const PageItemStyled = styled(CommonCardStyled)(({theme}) => ({
    height: 200,
    "display": "flex",
    "alignItems": "center",
    "justifyContent": "center",
    ":hover": {
        cursor: 'pointer',
        boxShadow: `0px 0px 40px 0px rgba(6, 182, 212, 0.5)`,
        transitionDuration: '.4s',
    },
}))

export default GrammarPage;