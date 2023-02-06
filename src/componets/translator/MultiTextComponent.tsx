import React from 'react';
import {observer} from "mobx-react-lite";
import {Box, Card, FormControl, IconButton, InputLabel, MenuItem, Select, styled, Tooltip} from "@mui/material";
import TranslateLineComponent from "./TranslateLineComponent";
import {langs} from "../../data/enums/Lang";
import {voices} from "../../data/enums/Voice";
import WordMeaningDialog from "./WordMeaningDialog";
import {TranslateTypes} from "../../data/store/TranslatorStore";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import {WordSoundService} from "../../data/services/WordSoundService";
import {TranslatorProps} from "./Translator";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import {useAppStore} from "../../context/useAppStore";
import {useLocation} from "react-router-dom";

const wordSoundService = new WordSoundService();

const MultiTextComponent = ({translatorStore, index}: TranslatorProps) => {
    const appStore = useAppStore()
    const location = useLocation()

    const updateParams = () => {
        if (index === 0) {
            const params = new URLSearchParams(location.search)
            params.set('q', translatorStore.getParamsJson())
            window.history.replaceState({}, '', `${location.pathname}?${params.toString()}`);
        }
        appStore.writeTranslatorStores()
    }

    const onChangeLangHandler = async (e: any) => {
        translatorStore.targetLang = e.target.value
        await translatorStore.runTranslate()
        translatorStore.updateTranslateLines()
        updateParams()
    }

    function onChangeVoiceHandler(e: any) {
        translatorStore.voice = e.target.value
        updateParams()
    }

    function onChangeTranslateTypeHandler(e: any) {
        translatorStore.translateType = e.target.value;
        translatorStore.updateTranslateLines()
        updateParams()
    }

    const removerTranslatorStore = () => {
        appStore.removerTranslatorStoreByIndex(index)
        appStore.writeTranslatorStores()
    }

    const play = async () => {
        const audio = await wordSoundService.getAudio({
            text: translatorStore.translateText,
            lang: translatorStore.targetLang,
            voice: translatorStore.voice
        })
        await audio.play()
    }

    return (
        <Box>
            <WordMeaningDialog/>
            <FormControl variant={'standard'} sx={{m: 1, minWidth: 50}}>
                <InputLabel id={'targetTextLangLabel'}>Lang</InputLabel>
                <Select
                    labelId={'targetTextLangLabel'}
                    id={'targetTextLangSelect'}
                    label={'Lang'}
                    value={translatorStore.targetLang}
                    onChange={onChangeLangHandler}
                >
                    {langs.map(lang => {
                        return (
                            <MenuItem
                                id={`menuItemTargetLang${lang}`}
                                key={lang}
                                value={lang}
                                children={lang.toUpperCase()}
                            />
                        )
                    })}
                </Select>
            </FormControl>
            <FormControl variant={'standard'} sx={{m: 1, minWidth: 50}}>
                <InputLabel id={'voiceLabel'}>Voice</InputLabel>
                <Select
                    labelId={'voiceLabel'}
                    id={'voiceSelect'}
                    label={'Voice'}
                    value={translatorStore.voice}
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
            <FormControl variant={'standard'} sx={{m: 1, minWidth: 150}}>
                <InputLabel id={'translateTypeLabel'}>Translate Type</InputLabel>
                <Select
                    labelId={'translateTypeLabel'}
                    id={'translateTypeSelect'}
                    label={'Translate Type'}
                    value={translatorStore.translateType}
                    onChange={onChangeTranslateTypeHandler}
                >
                    {TranslateTypes.map(type => {
                        return (
                            <MenuItem
                                id={`menuItemTranslateType${type}`}
                                key={`menuItemTranslateType${type}`}
                                value={type}
                                children={type.toUpperCase()}
                            />
                        )
                    })}
                </Select>
            </FormControl>
            <CardStyled style={{height: translatorStore.rows * 35}}>
                {translatorStore.translateLines.map((line, idx) => {
                    return (
                        <TranslateLineComponent
                            key={`translate_lines_idx_${idx}`}
                            translateLine={line}
                            translatorStore={translatorStore}
                        />
                    )
                })}
            </CardStyled>
            <CardFooterStyled>
                <Box   style={{flexGrow: 1}}>
                    <Tooltip title={'Play'}>
                        <IconButton
                            color={'primary'}
                            onClick={play}
                            size={'large'}
                            disabled={!translatorStore.translateText}
                            style={{flexGrow: 1}}
                        >
                            <VolumeUpIcon/>
                        </IconButton>
                    </Tooltip>
                </Box>
                <Box   style={{display: 'flex', justifyContent: 'flexEnd'}}>
                    {index > 0 &&
                        <Tooltip title={'Remove Line'}>
                            <IconButton
                                color={'primary'}
                                onClick={removerTranslatorStore}
                                size={'large'}
                            >
                                <DeleteForeverIcon/>
                            </IconButton>
                        </Tooltip>
                    }
                </Box>
            </CardFooterStyled>
        </Box>
    );
};

const CardStyled = styled(Card)({
    padding: 5,
    // background: grey[50],
    wordWrap: 'break-word',
})

const CardFooterStyled = styled('div')({
    display: 'flex',
    flexGrow: 1
})


export default observer(MultiTextComponent);