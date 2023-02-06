import React from 'react';
import {observer} from "mobx-react-lite";
import {Box, Card, FormControl, IconButton, InputLabel, MenuItem, Select, styled, Tooltip} from "@mui/material";
import {Lang, langs} from "../../data/enums/Lang";
import {grey} from "@mui/material/colors";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import {WordSoundService} from "../../data/services/WordSoundService";
import {CommonTranslatorProps} from "./Translator";

const wordSoundService = new WordSoundService();



const SourceTextComponent = ({translatorStore}: CommonTranslatorProps) => {
    
    const onChangeTextHandler = async (e: any) => {
        translatorStore.sourceText = e.target.value
        translatorStore.runTranslate()
    }

    const onChangeLangHandler = async (e: any) => {
        translatorStore.sourceLang = e.target.value
        translatorStore.sourceText = ''
        translatorStore.translateText = ''
        await translatorStore.runTranslate()
        translatorStore.updateTranslateLines()
    }

    const onChangeRowHandler = (e: any) =>  translatorStore.rows = e.target.value
    
    const play = async () => {
        const audio = await wordSoundService.getAudio({
            text: translatorStore.sourceText,
            lang: translatorStore.sourceLang,
            voice: translatorStore.voice
        })
        await audio.play()
    }

    return (
        <Box>
            <FormControl variant={'standard'} sx={{m: 1, minWidth: 50}}>
                <InputLabel id={'rowLabel'}>Rows</InputLabel>
                <Select
                    labelId={'rowLabel'}
                    id={'rowSelect'}
                    label={'Rows'}
                    value={translatorStore.rows}
                    onChange={onChangeRowHandler}
                >
                    {new Array(20).fill(null).map((_, idx) => {
                        const row = idx + 1
                        return (
                            <MenuItem
                                id={`row${row}`}
                                key={`row${row}`}
                                value={row}
                                children={row}
                            />
                        )
                    })}
                </Select>
            </FormControl>
            <FormControl variant={'standard'} sx={{m: 1, minWidth: 50}}>
                <InputLabel id={'sourceTextLangLabel'}>Lang</InputLabel>
                <Select
                    labelId={'sourceTextLangLabel'}
                    id={'sourceTextLangSelect'}
                    label={'Lang'}
                    value={translatorStore.sourceLang}
                    onChange={onChangeLangHandler}
                >
                    {langs.map(lang => {
                        return (
                            <MenuItem
                                id={`menuItemSrcLang${lang}`}
                                key={lang}
                                value={lang}
                                children={lang.toUpperCase()}
                            />
                        )
                    })}
                </Select>
            </FormControl>
            <CardStyled style={{height: translatorStore.rows * 35}}>
                <TextareaStyled
                    id={'sourceTextField'}
                    value={translatorStore.sourceText}
                    onChange={onChangeTextHandler}
                    rows={translatorStore.rows}
                />
            </CardStyled>
            <Tooltip title={'Play'}>
                <IconButton
                    color={'primary'}
                            onClick={play}
                    size={'large'}
                    disabled={!translatorStore.sourceText}
                >
                    <VolumeUpIcon/>
                </IconButton>
            </Tooltip>
        </Box>

    );
};

const CardStyled = styled(Card)({
    padding: 5,
    background: grey[50]
})

const TextareaStyled = styled('textarea')({
    resize: 'none',
    fontSize: 25,
    border: 'none',
    height: '100%',
    width: '100%',
    background: "transparent",
    ":focus": {
        outline: 'none',
    }
})

export default observer(SourceTextComponent);