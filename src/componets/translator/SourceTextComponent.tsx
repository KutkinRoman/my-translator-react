import React from 'react';
import {observer} from "mobx-react-lite";
import {Box, Card, FormControl, InputLabel, MenuItem, Select, styled} from "@mui/material";
import {useAppStore} from "../../context/useAppStore";
import {Lang, langs} from "../../data/enums/Lang";
import {grey} from "@mui/material/colors";

const SourceTextComponent = () => {
    const translator = useAppStore().translatorStore;

    const onChangeTextHandler = (e: any) => {
        translator.setSourceText(e.target.value)
        translator.updateWords()
    }

    const onChangeLangHandler = (e: any) => {
        translator.sourceLang = e.target.value
        translator.sourceText = ''
        translator.updateWords()
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
                {/*<TextField*/}
                {/*    id={'sourceTextField'}*/}
                {/*    fullWidth*/}
                {/*    value={translator.sourceText}*/}
                {/*    onChange={onChangeTextHandler}*/}
                {/*    multiline*/}
                {/*    rows={15}*/}
                {/*    variant={'standard'}*/}
                {/*/>*/}
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
    fontSize: 18,
    border: 'none',
    height: '100%',
    width: '100%',
    background: "transparent",
    ":focus": {
        outline: 'none',
    }
})

export default observer(SourceTextComponent);