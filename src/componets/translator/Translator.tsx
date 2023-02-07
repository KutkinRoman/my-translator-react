import React from 'react';
import {Grid} from "@mui/material";
import SourceTextComponent from "./SourceTextComponent";
import MultiTextComponent from "./MultiTextComponent";
import {TranslatorStore} from "../../data/store/TranslatorStore";
import {observer} from "mobx-react-lite";

export interface CommonTranslatorProps {
    translatorStore: TranslatorStore
}

export interface TranslatorProps extends CommonTranslatorProps {
    index: number
}

const Translator = ({translatorStore, index}: TranslatorProps) => {

    return (
        <React.Fragment>
            <Grid container spacing={1} id={'Grid'}>
                <Grid item xs={12} sm={12} mb={6} lg={6}>
                    <SourceTextComponent translatorStore={translatorStore} index={index}/>
                </Grid>
                <Grid item xs={12} sm={12} mb={6} lg={6}>
                    <MultiTextComponent translatorStore={translatorStore} index={index}/>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default observer(Translator);