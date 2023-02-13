import React from 'react';
import GrammarWrapper from "../GrammarWrapper";
import {Card, CardContent, Divider, Grid} from "@mui/material";
import TypographySmart from "../../typography/TypographySmart";

const PresentSimplePositive = () => {
    return (
        <GrammarWrapper>
            <Grid item xs={12} sm={12} mb={8} lg={8}>
                <Card>
                    <CardContent>
                        <TypographySmart
                            text={'{Present Simple} (positive)'}
                            variant={'h5'}
                        />
                    </CardContent>
                    <Divider/>
                    <CardContent>
                        <TypographySmart
                            text={'Use {Present Simple} to talk about {regular actions}'}
                            variant={'subtitle1'}
                        />
                        <TypographySmart
                            text={' - I always wake up at 8 o\'clock'}
                            variant={'body2'}
                        />
                        <TypographySmart
                            text={'Use {Present Simple} to talk about thing that are {generally true}'}
                            variant={'subtitle1'}
                        />
                        <TypographySmart
                            text={' - Marta speaks French well'}
                            variant={'body2'}
                        />
                        <TypographySmart
                            text={''}
                            variant={'subtitle1'}
                        />
                    </CardContent>
                </Card>
            </Grid>
        </GrammarWrapper>
    );
};

export default PresentSimplePositive;