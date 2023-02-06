import React, {useEffect, useMemo, useState} from 'react';
import {IconButton, styled, Tooltip, Typography, useTheme} from "@mui/material";
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import {WordSoundService} from "../../data/services/WordSoundService";
import {useAppStore} from "../../context/useAppStore";
import {grey, lightBlue} from "@mui/material/colors";
import {WordMeaning} from "../../data/model/WordMeaning";
import TranslateIcon from "@mui/icons-material/Translate";
import {WordMeaningService} from "../../data/services/WordMeaningService";
import {CommonTranslatorProps} from "./Translator";

const wordSoundService = new WordSoundService()
const wordMeaningService = new WordMeaningService();

interface TranslateLineComponentProps extends CommonTranslatorProps{
    translateLine: string;
}

const TranslateLineComponent = ({translateLine, translatorStore}: TranslateLineComponentProps) => {
    const wordMeaningDialogStore = useAppStore().wordMeaningDialogStore
    const theme = useTheme();
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
                text: translateLine,
                lang: translatorStore.targetLang,
                voice: translatorStore.voice
            })
            await audio.play()
        } catch (e) {
            console.error(e)
        } finally {
            setIsPlay(false)
        }
    }

    function onOpenDialogHandle() {
        wordMeaningDialogStore.isOpen = true
        wordMeaningDialogStore.wordMeanings = wordMeanings
    }

    useEffect(() => {
        async function searchMeaning() {
            const response = await wordMeaningService.search({
                search: translateLine,
                page: 1,
                pageSize: 3
            })
            setWordMeanings(response.data)
        }

        if (translatorStore.translateType){
            searchMeaning()
        }
    }, [translateLine, translatorStore.translateType])

    return (
        <WordComponentStyled>
            <Typography
                children={translateLine + `${(translatorStore.translateType === 'Sentence' && translateLine.length > 1) ? '.' : ''}`}
                component={'span'}
                style={{fontSize: 25}}
                color={isPlay ? theme.palette.primary.main : theme.palette.text.primary}
            />
            <SpaceSpan/>
            {(translateLine.length > 1 && translatorStore.translateType === 'Word' && mainWordMeaning) &&
                <Tooltip title={mainWordMeaning}>
                    <IconButtonTranslateStyled color={'primary'} onClick={onOpenDialogHandle}>
                        <TranslateIcon style={{fontSize: 15}}/>
                    </IconButtonTranslateStyled>
                </Tooltip>
            }
            {translateLine.length > 1 &&
                <Tooltip title={'Play'}>
                    <IconButtonPlayStyled color={'primary'} onClick={play}>
                        <VolumeUpIcon style={{fontSize: 15}}/>
                    </IconButtonPlayStyled>
                </Tooltip>
            }
        </WordComponentStyled>
    )
};

const WordComponentStyled = styled('span')({
    position: 'relative'
})

const SpaceSpan = styled(IconButton)({
    minWidth: 5
})

const IconButtonTranslateStyled = styled(IconButton)({
    position: 'absolute',
    top: -27,
    right: 20,
    zIndex: 1
})

const IconButtonPlayStyled = styled(IconButton)({
    position: 'absolute',
    top: -27,
    right: 0,
    zIndex: 1
})


export default TranslateLineComponent;