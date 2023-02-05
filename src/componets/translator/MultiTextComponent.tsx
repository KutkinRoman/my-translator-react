import React from 'react';
import {observer} from "mobx-react-lite";
import {Box, Card, FormControl, InputLabel, MenuItem, Select, styled} from "@mui/material";
import {useAppStore} from "../../context/useAppStore";
import WordComponent from "./WordComponent";
import {langs} from "../../data/enums/Lang";
import {voices} from "../../data/enums/Voice";
import {grey} from "@mui/material/colors";

const MultiTextComponent = () => {
    const translator = useAppStore().translatorStore;

    const onChangeLangHandler = (e: any) => {
        translator.targetLang = e.target.value
    }

    function onChangeVoiceHandler(e: any) {
        translator.voice = e.target.value
    }

    return (
        <Box>
            <FormControl variant={'standard'}  sx={{ m: 1, minWidth: 50 }}>
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
            <FormControl variant={'standard'}  sx={{ m: 1, minWidth: 50 }}>
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
            <CardStyled>
                {translator.words.map((word, idx) => {
                    return (
                        <WordComponent
                            key={`word_idx_${idx}`}
                            word={word}
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