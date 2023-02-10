import React from 'react';
import {Card, CardContent, Divider, Grid} from "@mui/material";
import TypographySmart from "../typography/TypographySmart";
import GrammarWrapper from "./GrammarWrapper";

const ToBeQuestionsShortAnswers = () => {
    return (
        <GrammarWrapper>
            <Grid item xs={12} sm={12} mb={8} lg={8}>
                <Card>
                    <CardContent>
                        <TypographySmart
                            text={'{To be} (questions and short answers)'}
                            variant={'h5'}
                        />
                    </CardContent>
                    <Divider/>
                    <CardContent>
                        <TypographySmart
                            text={'{Use} question words at the {beginning} of the sentence when you ask specific questions'}
                            variant={'h6'}
                        />
                        <TypographySmart
                            text={'Use {who} when you ask about {people}'}
                            variant={'subtitle1'}
                        />
                        <TypographySmart
                            text={' - {Who} is it?'}
                            variant={'body1'}
                            color={'text.secondary'}
                        />
                        <TypographySmart
                            text={'Use {where} when you ask about {places}'}
                            variant={'subtitle1'}
                        />
                        <TypographySmart
                            text={' - {Where} are you from?'}
                            variant={'body1'}
                            color={'text.secondary'}
                        />
                        <TypographySmart
                            text={' - {Where} is my bag?'}
                            variant={'body1'}
                            color={'text.secondary'}
                        />
                        <TypographySmart
                            text={'Use {how} when you want to ask about the {manner} or the {state} of something'}
                            variant={'subtitle1'}
                        />
                        <TypographySmart
                            text={' - {How} are you?'}
                            variant={'subtitle1'}
                            color={'text.secondary'}
                        />
                        <TypographySmart
                            text={' - {How} fast are you?'}
                            variant={'subtitle1'}
                            color={'text.secondary'}
                        />
                        <TypographySmart
                            text={' - {How} is your sister?'}
                            variant={'subtitle1'}
                            color={'text.secondary'}
                        />
                        <TypographySmart
                            text={'Use {what} when you ask about things and objects.'}
                            variant={'subtitle1'}
                        />
                        <TypographySmart
                            text={' - {What} is your name?'}
                            variant={'subtitle1'}
                            color={'text.secondary'}
                        />
                        <TypographySmart
                            text={' - {What} is it?'}
                            variant={'subtitle1'}
                            color={'text.secondary'}
                        />
                    </CardContent>
                    <Divider/>
                    <CardContent>
                        <TypographySmart
                            text={'{{Use to be} at the {beginning} of the sentence when you ask yes/no questions'}
                            variant={'h6'}
                        />
                        <TypographySmart
                            text={'Questions'}
                            variant={'subtitle1'}
                        />
                        <TypographySmart
                            text={'{Am/Are/Is} + S (subject) + ...? *{Subject} is a {pronoun} (I, you, we, etc.) or a {noun} (Anna, a dog, etc.)'}
                            variant={'subtitle1'}
                        />
                        <TypographySmart
                            text={' - {Are} you a journalist?'}
                            variant={'body1'}
                            color={'text.secondary'}
                        />
                        <TypographySmart
                            text={' - {Is} she happy?'}
                            variant={'body1'}
                            color={'text.secondary'}
                        />
                        <TypographySmart
                            text={' - {Am} I right?'}
                            variant={'body1'}
                            color={'text.secondary'}
                        />
                        <TypographySmart
                            text={'Short answers'}
                            variant={'subtitle1'}
                        />
                        <TypographySmart
                            text={'{Yes}, I/you/she/etc. + {am/are/is}.'}
                            variant={'subtitle1'}
                        />
                        <TypographySmart
                            text={' * {Are} you from Spain?'}
                            variant={'body1'}
                            color={'text.secondary'}
                        />
                        <TypographySmart
                            text={' -   Yes, I {am}.'}
                            variant={'body2'}
                            color={'text.secondary'}
                        />
                        <TypographySmart
                            text={' -   No, {I’m} not.'}
                            variant={'body2'}
                            color={'text.secondary'}
                        />
                        <TypographySmart
                            text={'{No}, I/you/she/etc. + {am/are/is + not}.'}
                            variant={'subtitle1'}
                        />
                        <TypographySmart
                            text={' * {Is} she a doctor?'}
                            variant={'body1'}
                            color={'text.secondary'}
                        />
                        <TypographySmart
                            text={' -   {Yes}, she is.'}
                            variant={'body2'}
                            color={'text.secondary'}
                        />
                        <TypographySmart
                            text={' -   {No}, she isn’t'}
                            variant={'body2'}
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
        </GrammarWrapper>
    );
};

export default ToBeQuestionsShortAnswers;