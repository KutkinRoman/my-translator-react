import React from 'react';
import Background from "../componets/background/Background";
import NavBar from "../componets/nav-bar/NavBar";
import {Card, Container, Grid} from "@mui/material";
import TypographySmart from "../componets/typography/TypographySmart";

const GrammarPage = () => {
    return (
        <Background>
            <NavBar/>
            <Container>
                <Grid container spacing={1}>
                    <Grid item xs={6} sm={6} mb={4} lg={4}>
                        <Card>
                            <TypographySmart
                                text={'I {am} (= I’{m}) from Italy.'}
                                variant={'h5'}
                            />
                        </Card>
                    </Grid>
                    <Grid item xs={6} sm={6} mb={4} lg={4}>
                        <Card>
                            <TypographySmart
                                text={'I {am} (= I’{m}) from Italy.'}
                                variant={'h5'}
                            />
                        </Card>
                    </Grid>
                    <Grid item xs={6} sm={6} mb={4} lg={4}>
                        <Card>
                            <TypographySmart
                                text={'I {am} (= I’{m}) from Italy.'}
                                variant={'h5'}
                            />
                        </Card>
                    </Grid>
                    <Grid item xs={6} sm={6} mb={4} lg={4}>
                        <Card>
                            <TypographySmart
                                text={'I {am} (= I’{m}) from Italy.'}
                                variant={'h5'}
                            />
                        </Card>
                    </Grid>
                    <Grid item xs={6} sm={6} mb={4} lg={4}>
                        <Card>
                            <TypographySmart
                                text={'I {am} (= I’{m}) from Italy.'}
                                variant={'h5'}
                            />
                        </Card>
                    </Grid>
                    <Grid item xs={6} sm={6} mb={4} lg={4}>
                        <Card>
                            <TypographySmart
                                text={'I {am} (= I’{m}) from Italy.'}
                                variant={'h5'}
                            />
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </Background>
    );
};

export default GrammarPage;