import {Box, Button, Card, CardContent, CardMedia, Dialog, Grid, IconButton, Tooltip, Typography} from '@mui/material';
import React from 'react';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import {observer} from "mobx-react-lite";
import {useAppStore} from "../../context/useAppStore";
import {lightBlue} from "@mui/material/colors";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import {VoiceEnum} from "../../data/enums/Voice";
import WordMeaningCard from "./WordMeaningCard";
import {CommonDialogActions, CommonDialogContent, CommonDialogTitle} from "../common/styled";


const WordMeaningDialog = () => {
        const store = useAppStore().wordMeaningDialogStore;

        const descriptionElementRef = React.useRef<HTMLElement>(null);

        React.useEffect(() => {
            if (store.isOpen) {
                const {current: descriptionElement} = descriptionElementRef;
                if (descriptionElement !== null) {
                    descriptionElement.focus();
                }
            }
        }, [store.isOpen]);


        function onCloseHandle() {
            store.isOpen = false
        }


        return (
            <Box>
                <Dialog
                    open={store.isOpen}
                    onClose={onCloseHandle}
                    scroll={'body'}
                    aria-labelledby="scroll-dialog-title"
                    aria-describedby="scroll-dialog-description"
                    maxWidth={'lg'}
                >
                    <CommonDialogTitle id="scroll-dialog-title" >Meanings</CommonDialogTitle>
                    <CommonDialogContent dividers={true}>
                        <Grid
                            key={`grid`}
                            container
                            spacing={2}
                        >
                            {store.wordMeanings.map((wordMeaning, inx) => {
                                return (
                                    <React.Fragment>
                                        {wordMeaning.meanings.map((meaning, ind) => {
                                            return (
                                                <Grid
                                                    key={`grid_${inx}_item_${ind}`}
                                                    item
                                                    xs={12} sm={12} mb={4} lg={4}
                                                >
                                                   <WordMeaningCard word={wordMeaning.text} meaning={meaning}/>
                                                </Grid>
                                            )
                                        })}
                                    </React.Fragment>
                                )
                            })}
                        </Grid>
                    </CommonDialogContent>
                    <CommonDialogActions>
                        <Button onClick={onCloseHandle}>Close</Button>
                    </CommonDialogActions>
                </Dialog>
            </Box>
        )
            ;
    }
;


export default observer(WordMeaningDialog);