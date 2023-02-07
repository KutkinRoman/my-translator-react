import React, {useEffect, useMemo, useState} from 'react';
import {IconButton, styled, Tooltip, Typography, useTheme} from "@mui/material";
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import {WordSoundService} from "../../data/services/WordSoundService";
import {useAppStore} from "../../context/useAppStore";
import {WordMeaning} from "../../data/model/WordMeaning";
import TranslateIcon from "@mui/icons-material/Translate";
import {WordMeaningService} from "../../data/services/WordMeaningService";
import {CommonTranslatorProps} from "./Translator";

const wordSoundService = new WordSoundService()
const wordMeaningService = new WordMeaningService();

interface TranslateLineComponentProps extends CommonTranslatorProps {
    translateLine: string;
    lineIndex: number;
}

const TranslateLineComponent = ({translateLine, translatorStore, lineIndex}: TranslateLineComponentProps) => {
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

        if (translatorStore.translateType) {
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
                    <IconButtonMeaningWordStyled id={`btnMeaningDialog_${lineIndex}_${translateLine}`} color={'primary'}
                                               onClick={onOpenDialogHandle}>
                        <TranslateIcon style={{fontSize: 15}}/>
                    </IconButtonMeaningWordStyled>
                </Tooltip>
            }
            {(translateLine.length > 1 && translatorStore.translateType === 'Word') &&
                <Tooltip title={'Play'}>
                    <IconButtonPlayWordStyled id={`btnPlay_${lineIndex}_${translateLine}`} color={'primary'} onClick={play}>
                        <VolumeUpIcon style={{fontSize: 15}}/>
                    </IconButtonPlayWordStyled>
                </Tooltip>
            }
            {(translateLine.length > 1 && translatorStore.translateType === 'Sentence') &&
                <Tooltip title={'Play'}>
                    <IconButtonPlaySentenceStyled id={`btnPlay_${lineIndex}_${translateLine}`} color={'primary'} onClick={play}>
                        <VolumeUpIcon style={{fontSize: 15}}/>
                    </IconButtonPlaySentenceStyled>
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

const IconButtonMeaningWordStyled = styled(IconButton)({
    position: 'absolute',
    top: -27,
    left: 20,
    zIndex: 1
})

const IconButtonPlayWordStyled = styled(IconButton)({
    position: 'absolute',
    top: -27,
    left: 0,
    zIndex: 1
})

const IconButtonPlaySentenceStyled = styled(IconButton)({
    position: 'absolute',
    top: -27,
    left: 0,
    zIndex: 1
})


export default TranslateLineComponent;