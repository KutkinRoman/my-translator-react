import {Button, Container, styled} from '@mui/material';
import React, {useEffect} from 'react';
import NavBar from "../componets/nav-bar/NavBar";
import Translator from "../componets/translator/Translator";
import {useAppStore} from "../context/useAppStore";
import {observer} from "mobx-react-lite";
import {TranslatorParams, TranslatorStore} from "../data/store/TranslatorStore";
import {useLocation} from "react-router-dom";
import Background from "../componets/background/Background";


const MainPage = () => {
    const location = useLocation();
    const params = new URLSearchParams(location.search)
    const appStore = useAppStore();
    const translatorStores = useAppStore().translatorStores

    const onAddTranslatorHandler = () => {
        appStore.setTranslatorStores([...appStore.translatorStores, new TranslatorStore()])
    }

    useEffect(() => {
        const json = params.get('q')
        if (json) {
            appStore.translatorStores[0].setParams(JSON.parse(json) as TranslatorParams)
        }
    }, [])

    return (
        <Background id={'mainPage'}>
            <NavBar/>
            {translatorStores.map((translatorStore, index) => {
                return (
                    <React.Fragment>
                        <ContainerStyled key={`translatorContainer${index}`} maxWidth={'xl'}>
                            <Translator
                                index={index}
                                translatorStore={translatorStore}
                            />
                        </ContainerStyled>
                        {/*<Divider/>*/}
                    </React.Fragment>
                )
            })}
            <FooterContainerStyled maxWidth={'xl'}>
                <Button
                    variant={'text'}
                    size={'small'}
                    color={'secondary'}
                    fullWidth
                    onClick={onAddTranslatorHandler}
                    disabled={translatorStores.length > 100}
                >
                    Add LINE
                </Button>
            </FooterContainerStyled>
        </Background>
    );
};

const BackgroundColor = styled('div')(({theme}) => (
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

const ContainerStyled = styled(Container)({
    overflowX: 'hidden',
});

const FooterContainerStyled = styled(Container)({
    paddingBottom: 100
});

export default observer(MainPage);