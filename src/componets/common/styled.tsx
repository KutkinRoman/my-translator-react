import {styled, Card, DialogTitle, DialogContent, DialogActions} from "@mui/material";


export const CommonCardStyled = styled(Card)(({theme}) => ({
    borderRadius: 10,
}))

export const CommonDialogTitle= styled(DialogTitle)(({theme}) => ({
    background: theme.palette.background.default,
}))

export const CommonDialogContent = styled(DialogContent)(({theme}) => ({
    background: theme.palette.background.default,
}))

export const CommonDialogActions= styled(DialogActions)(({theme}) => ({
    background: theme.palette.background.default,
}))





