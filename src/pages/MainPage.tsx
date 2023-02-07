import {Button, Container, styled} from '@mui/material';
import React, {useEffect} from 'react';
import NavBar from "../componets/nav-bar/NavBar";
import Translator from "../componets/translator/Translator";
import {useAppStore} from "../context/useAppStore";
import {observer} from "mobx-react-lite";
import {TranslatorParams, TranslatorStore} from "../data/store/TranslatorStore";
import {useLocation} from "react-router-dom";
import Background from "../componets/background/Background";
import {fadeInUpFunc} from "../componets/animation";


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


const ContainerStyled = styled(Container)({
    overflowX: 'hidden',
});

const FooterContainerStyled = styled(Container)({
    paddingBottom: 100,
    animation: fadeInUpFunc()
});

export default observer(MainPage);