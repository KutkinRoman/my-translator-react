import React from 'react';
import Background from "../background/Background";
import NavBar from "../nav-bar/NavBar";
import {Card, CardContent, Container, Divider, Grid} from "@mui/material";
import TypographySmart from "../typography/TypographySmart";

const ToBePositive = () => {
    return (
        <Background>
            <NavBar/>
            <Container>
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={12} mb={8} lg={8}>
                        <Card>
                            <CardContent>
                                <TypographySmart
                                    text={'{To be} (positive)'}
                                    variant={'h5'}
                                />
                            </CardContent>
                            <Divider/>
                            <CardContent>
                                <TypographySmart
                                    text={'Use {to be} to talk about'}
                                    variant={'subtitle1'}
                                />
                                <TypographySmart
                                    text={' {-} names: I {am} Sarah'}
                                    variant={'body1'}
                                    color={'text.secondary'}
                                />
                                <TypographySmart
                                    text={' {-} jobs: She {is} a manager'}
                                    variant={'body1'}
                                    color={'text.secondary'}
                                />
                                <TypographySmart
                                    text={' {-} age: You {are} 32'}
                                    variant={'body1'}
                                    color={'text.secondary'}
                                />
                                <TypographySmart
                                    text={' {-} places: I {am} at home'}
                                    variant={'body1'}
                                    color={'text.secondary'}
                                />
                                <TypographySmart
                                    text={' {-} characteristics: He {is} funny'}
                                    variant={'body1'}
                                    color={'text.secondary'}
                                />
                            </CardContent>
                            <Divider/>
                            <CardContent>
                                <TypographySmart
                                    text={'{To be} has different forms: {am}, {are}, {is}, so {am/are/is} = {to be}'}
                                    variant={'subtitle1'}
                                />
                                <TypographySmart
                                    text={'I {am} = I’{m}'}
                                    variant={'body1'}
                                    color={'text.secondary'}
                                />
                                <TypographySmart
                                    text={'You {are} = You’{re}'}
                                    variant={'body1'}
                                    color={'text.secondary'}
                                />
                                <TypographySmart
                                    text={'We {are} = We’{re}'}
                                    variant={'body1'}
                                    color={'text.secondary'}
                                />
                                <TypographySmart
                                    text={'They {are} = They’{re}'}
                                    variant={'body1'}
                                    color={'text.secondary'}
                                />
                                <TypographySmart
                                    text={'He {is} = He’{s}'}
                                    variant={'body1'}
                                    color={'text.secondary'}
                                />
                                <TypographySmart
                                    text={'She {is} = She’{s}'}
                                    variant={'body1'}
                                    color={'text.secondary'}
                                />
                                <TypographySmart
                                    text={'It {is} = It’{s}'}
                                    variant={'body1'}
                                    color={'text.secondary'}
                                />
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={12} mb={4} lg={4}>
                        <Card>
                            <CardContent>
                                <iframe
                                    width={'100%'}
                                    height={'100%'}
                                    style={{borderRadius: 15}}
                                    src="https://www.youtube.com/embed/u8Y01xlieHk"
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen>

                                </iframe>
                            </CardContent>
                            <CardContent>
                                <iframe
                                    width={'100%'}
                                    height={'100%'}
                                    style={{borderRadius: 15}}
                                    src="https://www.youtube.com/embed/YqO6kDCxpJc"
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                />
                            </CardContent>
                            <CardContent>
                                <iframe
                                    width={'100%'}
                                    height={'100%'}
                                    style={{borderRadius: 15}}
                                    src="https://www.youtube.com/embed/LtuMkah_-2o"
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen/>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </Background>
    );
};

export default ToBePositive;