import {Button, Container, Divider, styled} from '@mui/material';
import React, {useEffect} from 'react';
import NavBar from "../componets/nav-bar/NavBar";
import Translator from "../componets/translator/Translator";
import {useAppStore} from "../context/useAppStore";
import {observer} from "mobx-react-lite";
import {TranslatorParams, TranslatorStore} from "../data/store/TranslatorStore";
import {useLocation} from "react-router-dom";


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
        <BackgroundColor>
            <BackgroundImage>
                <WrapperStyled>
                    <NavBar/>
                    <Divider light/>
                    {translatorStores.map((translatorStore, index) => {
                        return (
                            <React.Fragment>
                                <ContainerStyled key={`translatorContainer${index}`} maxWidth={'xl'}>
                                    <Translator
                                        index={index}
                                        translatorStore={translatorStore}
                                    />
                                </ContainerStyled>
                                <Divider light/>
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
                </WrapperStyled>
            </BackgroundImage>
        </BackgroundColor>
    );
};


const BackgroundColor = styled('div')(({theme}) => (
    {
        background: theme.palette.background.default
    }
));

const BackgroundImage = styled('div')({
    background: 'url(\"https://i.postimg.cc/15qsb794/background-dark.jpg\") no-repeat center',
    backgroundSize: "cover"
})

const WrapperStyled = styled('div')(({theme}) => (
    {
        overflowX: 'hidden',
        paddingBottom: 100,
        minHeight: '100vh',
        background: 'linear-gradient(rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.7),  rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.95) 85%)'
    }
));

const ContainerStyled = styled(Container)({
    overflowX: 'hidden',
});

const FooterContainerStyled = styled(Container)({
    paddingTop: 50,
    paddingBottom: 100
});

export default observer(MainPage);