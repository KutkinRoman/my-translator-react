import React from 'react';
import GrammarWrapper from "../GrammarWrapper";
import {Card, CardContent, Divider, Grid} from "@mui/material";
import TypographySmart from "../../typography/TypographySmart";

const PresentSimpleNegative = () => {
    return (
        <GrammarWrapper>
            <Grid item xs={12} sm={12} mb={8} lg={8}>
                <Card>
                    <CardContent>
                        <TypographySmart
                            text={'{Present Simple} (negative)'}
                            variant={'h5'}
                        />
                    </CardContent>
                    <Divider/>
                    <CardContent>
                        <TypographySmart
                            text={''}
                            variant={'subtitle1'}
                        />
                        <TypographySmart
                            text={''}
                            variant={'subtitle1'}
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

export default PresentSimpleNegative;