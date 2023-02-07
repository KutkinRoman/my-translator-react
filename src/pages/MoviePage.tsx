import React, {useState} from 'react';
import Background from "../componets/background/Background";
import {Card, Container, styled} from "@mui/material";
import Translator from "../componets/translator/Translator";
import {TranslatorStore} from "../data/store/TranslatorStore";
import {fadeInDownFunc} from "../componets/animation/animation";


const MoviePage = () => {

    const [translatorStore] = useState(() => {
        const store = new TranslatorStore()
        store.rows = 1
        return store
    })

    return (
        <Background>
            <Container maxWidth={'lg'}>
                <MovieContainerStyled>
                    <iframe
                        width={'100%'}
                        height={window.innerHeight * 0.7}
                        style={{borderRadius: 15}}
                        src="https://www.youtube.com/embed/b9O9NI-RJ3o"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen>
                    </iframe>
                </MovieContainerStyled>
                <Translator translatorStore={translatorStore} index={-1}/>
            </Container>
        </Background>
    );
};

const MovieContainerStyled = styled(Card)({
    marginTop: 20,
    animation: fadeInDownFunc()
})

export default MoviePage;