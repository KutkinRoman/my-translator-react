import React from 'react';
import {observer} from "mobx-react-lite";
import {Box, Card, FormControl, InputLabel, MenuItem, Select, styled} from "@mui/material";
import {useAppStore} from "../../context/useAppStore";
import {Lang, langs} from "../../data/enums/Lang";
import {grey} from "@mui/material/colors";


const SourceTextComponent = () => {
    const translator = useAppStore().translatorStore;

    const onChangeTextHandler = async (e: any) => {
        translator.sourceText = e.target.value
        translator.runTranslate()
    }

    const onChangeLangHandler = async (e: any) => {
        translator.sourceLang = e.target.value
        translator.sourceText = ''
        translator.translateText = ''
        await translator.runTranslate()
        translator.updateTranslateLines()
    }

    return (
        <Box>
            <FormControl variant={'standard'} sx={{m: 1, minWidth: 50}}>
                <InputLabel id={'sourceTextLangLabel'}>Lang</InputLabel>
                <Select
                    labelId={'sourceTextLangLabel'}
                    id={'sourceTextLangSelect'}
                    label={'Lang'}
                    value={translator.sourceLang}
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
            <CardStyled>
                <TextareaStyled
                    id={'sourceTextField'}
                    value={translator.sourceText}
                    onChange={onChangeTextHandler}
                    rows={15}
                />
            </CardStyled>
        </Box>

    );
};

const CardStyled = styled(Card)({
    height: 350,
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