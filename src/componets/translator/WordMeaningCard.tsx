import React, {useState} from 'react';
import {Meaning} from "../../data/model/WordMeaning";
import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    FormControl,
    IconButton,
    InputLabel, MenuItem, Select,
    Tooltip,
    Typography
} from "@mui/material";
import {lightBlue} from "@mui/material/colors";
import {VoiceEnum, voices} from "../../data/enums/Voice";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import {WordSoundService} from "../../data/services/WordSoundService";
import {Lang} from "../../data/enums/Lang";
import {CommonCardStyled} from "../common/styled";

const wordSoundService = new WordSoundService();

interface WordMeaningCardProps {
    word: string
    meaning: Meaning
}

const WordMeaningCard = ({word, meaning}: WordMeaningCardProps) => {

    const [currentVoice, setCurrentVoice] = useState(VoiceEnum.MALE_1)

    async function play() {
        const audio = await wordSoundService.getAudio({
            text: word,
            lang: Lang.EN,
            voice: currentVoice
        })
        await audio.play()
    }

    const onChangeVoiceHandler = (e: any) => setCurrentVoice(e.target.value)

    return (
        <CommonCardStyled style={{height: 550}}>
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
            <CardContent style={{height: 180}}>
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
                <Tooltip title={'Play'}>
                    <IconButton color={'primary'}
                                onClick={play} size={'small'}>
                        <VolumeUpIcon/>
                    </IconButton>
                </Tooltip>
                <FormControl variant={'standard'} sx={{m: 1, minWidth: 50}}>
                    <InputLabel id={'voiceLabel'}>Voice</InputLabel>
                    <Select
                        labelId={'voiceLabel'}
                        id={'voiceSelect'}
                        label={'Voice'}
                        value={currentVoice}
                        onChange={onChangeVoiceHandler}
                    >
                        {voices.map(voice => {
                            return (
                                <MenuItem
                                    id={`menuItemVoice${voice}`}
                                    key={`menuItemVoice${voice}`}
                                    value={voice}
                                    children={voice.toUpperCase()}
                                />
                            )
                        })}
                    </Select>
                </FormControl>
            </CardActions>
        </CommonCardStyled>
    );
};

export default WordMeaningCard;