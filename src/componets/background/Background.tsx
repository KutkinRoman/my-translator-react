import React from 'react';
import {styled, useTheme} from "@mui/material";

export interface BackgroundProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    children?: React.ReactNode
}

const Background = ({children}: BackgroundProps) => {
    const theme = useTheme()

    return (
        <WrapperStyled>
            {theme.palette.mode === 'light'
                ? <React.Fragment>
                    <BackgroundImageLight id={'backgroundImageLight'}/>
                    <WrapperLinearGradientLight id={'wrapperLinearGradientLight'}/>
                </React.Fragment>
                : <React.Fragment>
                    <BackgroundImageDark id={'backgroundImageDark'}/>
                    <WrapperLinearGradientDark id={'wrapperLinearGradientDark'}/>
                </React.Fragment>
            }
            {children}
        </WrapperStyled>
    );
};

const WrapperStyled = styled('div')(({theme}) => (
    {
        position: 'relative',
        background: 'transparent',
        minHeight: '100vh',
    }
));

const BackgroundImage = styled('div')({
    backgroundSize: "cover",
    position: 'fixed',
    top: 0,
    left: 0,
    minHeight: '100vh',
    minWidth: '100vw',
    zIndex: -20
})

const BackgroundImageLight = styled(BackgroundImage)({
    background: 'url(\"https://gamerwall.pro/uploads/posts/2022-03/1648759064_6-gamerwall-pro-p-fon-dlya-bannera-more-krasivie-6.jpg\") no-repeat center',
    backgroundSize: 'cover'
})


const BackgroundImageDark = styled(BackgroundImage)({
    background: 'url(\"https://gamerwall.pro/uploads/posts/2022-03/1648671880_2-gamerwall-pro-p-fon-na-rabochii-stol-noch-krasivie-2.jpg\") no-repeat center',
    backgroundSize: 'cover'
})


const WrapperLinearGradient = styled('div')(({theme}) => (
    {
        overflowX: 'hidden',
        position: 'fixed',
        top: 0,
        left: 0,
        minHeight: '100vh',
        minWidth: '100vw',
        zIndex: -10,
    }
));

const WrapperLinearGradientLight = styled(WrapperLinearGradient)(({theme}) => (
    {
        background: 'linear-gradient(rgb(255 255 255 / 25%) 0%, rgb(255 255 255 / 40%),  rgb(255 255 255 / 50%), rgb(255 255 255 / 70%) 85%)',
    }
));


const WrapperLinearGradientDark = styled(WrapperLinearGradient)(({theme}) => (
    {
        background: 'linear-gradient(rgba(0, 8, 16, 0.5) 0%, rgba(0, 8, 16, 0.7),  rgba(0, 8, 16, 0.85), rgba(0, 8, 16, 0.95) 85%)',
    }
));

export default Background;