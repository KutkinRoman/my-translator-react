import {Button, Container, Divider, styled} from '@mui/material';
import React from 'react';
import NavBar from "../componets/nav-bar/NavBar";
import Translator from "../componets/translator/Translator";
import {useAppStore} from "../context/useAppStore";
import {observer} from "mobx-react-lite";
import {TranslatorStore} from "../data/store/TranslatorStore";

const MainPage = () => {

    const appStore = useAppStore();
    const translatorStores = useAppStore().translatorStores

    const onAddTranslatorHandler = () => {
        appStore.setTranslatorStores([...appStore.translatorStores, new TranslatorStore()])
    }

    return (
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
    );
};

const WrapperStyled = styled('div')(({theme}) => (
    {
        overflowX: 'hidden',
        paddingBottom: 100,
        background: theme.palette.background.default,
        minHeight: '100vh'
    }
));

const ContainerStyled = styled(Container)({
    overflowX: 'hidden',
});

const FooterContainerStyled = styled(Container)({
    paddingTop: 50
});

export default observer(MainPage);