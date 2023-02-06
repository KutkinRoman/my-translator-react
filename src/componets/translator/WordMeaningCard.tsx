import React from 'react';
import {Meaning} from "../../data/model/WordMeaning";
import {Card, CardActions, CardContent, CardMedia, IconButton, Tooltip, Typography} from "@mui/material";
import {lightBlue} from "@mui/material/colors";
import {VoiceEnum} from "../../data/enums/Voice";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import {WordSoundService} from "../../data/services/WordSoundService";
import {Lang} from "../../data/enums/Lang";

const wordSoundService = new WordSoundService();

interface WordMeaningCardProps {
    word: string
    meaning: Meaning
}

const WordMeaningCard = ({word, meaning}: WordMeaningCardProps) => {

    async function play(voice: VoiceEnum) {
        const audio = await wordSoundService.getAudio({
            text: word,
            lang: Lang.EN,
            voice
        })
        await audio.play()
    }

    return (
        <Card style={{height: 550}}>
            <CardContent>
                <Typography variant={'h6'} color={lightBlue[700]}>
                    {word}
                </Typography>
            </CardContent>
            <CardMedia
                component={'img'}
                height={200}
                image={meaning.imageUrl}
                alt={meaning.translation.text}
            />
            <CardContent style={{height: 200}}>
                <Typography>
                    {meaning.translation.text}
                </Typography>
                <Typography variant={'caption'} color={lightBlue[700]}>
                    {`[ ${meaning.transcription} ]`}
                </Typography>
                <br/>
                <Typography variant={'caption'}>
                    {meaning.translation.note}
                </Typography>
            </CardContent>
            <CardActions>
                <Tooltip title={'Play Male 1'}>
                    <IconButton color={'primary'}
                                onClick={() => play(VoiceEnum.MALE_1)} size={'small'}>
                        <VolumeUpIcon/>
                    </IconButton>
                </Tooltip>
                <Tooltip title={'Play Male 2'}>
                    <IconButton color={'primary'}
                                onClick={() => play(VoiceEnum.MALE_2)} size={'small'}>
                        <VolumeUpIcon/>
                    </IconButton>
                </Tooltip>
                <Tooltip title={'Play Female 1'}>
                    <IconButton color={'primary'}
                                onClick={() => play(VoiceEnum.FEMALE_1)} size={'small'}>
                        <VolumeUpIcon/>
                    </IconButton>
                </Tooltip>
                <Tooltip title={'Play Female 2'}>
                    <IconButton color={'primary'}
                                onClick={() => play(VoiceEnum.FEMALE_2)} size={'small'}>
                        <VolumeUpIcon/>
                    </IconButton>
                </Tooltip>
            </CardActions>
        </Card>
    );
};

export default WordMeaningCard;