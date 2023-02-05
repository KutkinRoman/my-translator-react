import React, {useEffect, useMemo, useState} from 'react';
import {IconButton, styled, Tooltip, Typography} from "@mui/material";
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import TranslateIcon from '@mui/icons-material/Translate';
import {WordSoundService} from "../../data/services/WordSoundService";
import {WordMeaningService} from "../../data/services/WordMeaningService";
import {WordMeaning} from "../../data/model/WordMeaning";
import {useAppStore} from "../../context/useAppStore";
import {blue, grey, lightBlue} from "@mui/material/colors";

const wordSoundService = new WordSoundService()

const wordMeaningService = new WordMeaningService();

interface WordComponentProps {
    word: string;
}

const WordComponent = ({word}: WordComponentProps) => {
    const translator = useAppStore().translatorStore
    const [isPlay, setIsPlay] = useState(false)
    const [wordMeanings, setWordMeanings] = useState<WordMeaning[]>([])

    const mainWordMeaning = useMemo(() => {
        if (wordMeanings.length > 0 && wordMeanings[0].meanings.length > 0) {
            return wordMeanings[0].meanings[0].translation.text
        }
        return ''
    }, [wordMeanings])

    async function play() {
        setIsPlay(true)
        try {
            const audio = await wordSoundService.getAudio({
                text: word,
                lang: translator.targetLang,
                voice: translator.voice
            })
            await audio.play()
        } catch (e) {
            console.error(e)
        } finally {
            setIsPlay(false)
        }
    }

    useEffect(() => {
        async function searchMeaning() {
            const response = await wordMeaningService.search({
                search: word,
            })
            setWordMeanings(response.data)
        }

        searchMeaning()
    }, [isPlay])

    return (
        <WordComponentStyled>
            <Typography
                children={word}
                component={'span'}
                style={{fontSize: 18}}
                color={isPlay ? lightBlue[700] : grey[900]}
            />
            <SpaceSpan/>
            {word.length > 1 &&
                <React.Fragment>
                    <Tooltip title={mainWordMeaning}>
                        <IconButtonTranslateStyled color={'primary'}>
                            <TranslateIcon style={{fontSize: 8}}/>
                        </IconButtonTranslateStyled>
                    </Tooltip>
                    <Tooltip title={'Play'}>
                        <IconButtonPlayStyled color={'primary'} onClick={play}>
                            <VolumeUpIcon style={{fontSize: 8}}/>
                        </IconButtonPlayStyled>
                    </Tooltip>
                </React.Fragment>
            }
        </WordComponentStyled>
    )
};

const WordComponentStyled = styled('span')({
    position: 'relative'
})

const WordSpan = styled(Typography)({})

const SpaceSpan = styled(IconButton)({
    minWidth: 5
})

const IconButtonPlayStyled = styled(IconButton)({
    position: 'absolute',
    top: -10,
    right: 0,
    zIndex: 1
})

const IconButtonTranslateStyled = styled(IconButton)({
    position: 'absolute',
    top: -10,
    right: 15,
    zIndex: 1
})

export default WordComponent;