import React from 'react';
import {observer} from "mobx-react-lite";
import {Box, Card, FormControl, InputLabel, MenuItem, Select, styled} from "@mui/material";
import {useAppStore} from "../../context/useAppStore";
import TranslateLineComponent from "./TranslateLineComponent";
import {langs} from "../../data/enums/Lang";
import {voices} from "../../data/enums/Voice";
import {grey} from "@mui/material/colors";
import WordMeaningDialog from "./WordMeaningDialog";
import {TranslateType, TranslateTypes} from "../../data/store/TranslatorStore";

const MultiTextComponent = () => {
    const translator = useAppStore().translatorStore;

    const onChangeLangHandler = async (e: any) => {
        translator.targetLang = e.target.value
        await translator.runTranslate()
        translator.updateTranslateLines()
    }

    function onChangeVoiceHandler(e: any) {
        translator.voice = e.target.value
    }

    function onChangeTranslateTypeHandler(e: any) {
        translator.translateType = e.target.value;
        translator.updateTranslateLines()
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
                    value={translator.targetLang}
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
                    value={translator.voice}
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
                    value={translator.translateType}
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
            <CardStyled>
                {translator.translateLines.map((line, idx) => {
                    return (
                        <TranslateLineComponent
                            key={`translate_lines_idx_${idx}`}
                            translateLine={line}
                        />
                    )
                })}
            </CardStyled>
        </Box>
    );
};

const CardStyled = styled(Card)({
    height: 350,
    padding: 5,
    background: grey[50],
    wordWrap: 'break-word',
    // overflowY: 'scroll',
    // overflowX: 'hidden'
})


export default observer(MultiTextComponent);