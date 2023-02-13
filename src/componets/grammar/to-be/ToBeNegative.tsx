import React from 'react';
import {Card, CardContent, Divider, Grid} from "@mui/material";
import TypographySmart from "../../typography/TypographySmart";
import GrammarWrapper from "./../GrammarWrapper";

const ToBeNegative = () => {
    return (
        <GrammarWrapper>
            <Grid item xs={12} sm={12} mb={8} lg={8}>
                <Card>
                    <CardContent>
                        <TypographySmart
                            text={'{To be} (negative)'}
                            variant={'h5'}
                        />
                    </CardContent>
                    <Divider/>
                    <CardContent>
                        <TypographySmart
                            text={'Use {to be} (am/are/is) + {not} to make negative sentences'}
                            variant={'subtitle1'}
                        />
                        <TypographySmart
                            text={' {-} I\'{m} not tired'}
                            variant={'body1'}
                            color={'text.secondary'}
                        />
                        <TypographySmart
                            text={' {-} Barbara {isn\'t} happy'}
                            variant={'body1'}
                            color={'text.secondary'}
                        />
                        <TypographySmart
                            text={' {-} Alex and Sam {are not} serious'}
                            variant={'body1'}
                            color={'text.secondary'}
                        />
                        <TypographySmart
                            text={' {-} We {are not} busy'}
                            variant={'body1'}
                            color={'text.secondary'}
                        />
                        <TypographySmart
                            text={' {-} Harry {isn\'t} from Germany'}
                            variant={'body1'}
                            color={'text.secondary'}
                        />
                    </CardContent>
                    <Divider/>
                    <CardContent>
                        <TypographySmart
                            text={'I {am not} = I\'{m not}'}
                            variant={'body1'}
                            color={'text.secondary'}
                        />
                        <TypographySmart
                            text={'you {are not} = you {aren\'t}'}
                            variant={'body1'}
                            color={'text.secondary'}
                        />
                        <TypographySmart
                            text={'we {are not} = we {aren\'t}'}
                            variant={'body1'}
                            color={'text.secondary'}
                        />
                        <TypographySmart
                            text={'they {are not} = they {aren\'t}'}
                            variant={'body1'}
                            color={'text.secondary'}
                        />
                        <TypographySmart
                            text={'he {is not} = he {isn\'t}'}
                            variant={'body1'}
                            color={'text.secondary'}
                        />
                        <TypographySmart
                            text={'she {is not} = she {isn\'t}'}
                            variant={'body1'}
                            color={'text.secondary'}
                        />
                        <TypographySmart
                            text={'it {is not} = it {isn\'t}'}
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

                    </CardContent>
                    <CardContent>

                    </CardContent>
                </Card>
            </Grid>
        </GrammarWrapper>
    );
};

export default ToBeNegative;