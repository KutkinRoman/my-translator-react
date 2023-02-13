import React from 'react';
import {Route, Routes} from 'react-router-dom'
import {observer} from "mobx-react-lite";
import MainPage from "../pages/MainPage";
import GrammarPage from "../pages/GrammarPage";
import ToBePositive from "../componets/grammar/to-be/ToBePositive";
import ToBeNegative from "../componets/grammar/to-be/ToBeNegative";
import ToBeQuestionsShortAnswers from "../componets/grammar/to-be/ToBeQuestionsShortAnswers";
import MoviePage from "../pages/MoviePage";
import PresentSimplePositive from "../componets/grammar/present-simple/PresentSimplePositive";
import PresentSimpleNegative from "../componets/grammar/present-simple/PresentSimpleNegative";

const RouterContextProvider = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainPage/>}/>
            <Route path={'/grammar'} element={<GrammarPage/>}></Route>
            <Route path={'/grammar/to-be-positive'} element={<ToBePositive/>}/>
            <Route path={'/grammar/to-be-negative'} element={<ToBeNegative/>}/>
            <Route path={'/grammar/to-be-questions-short-answers'} element={<ToBeQuestionsShortAnswers/>}/>
            <Route path={'/grammar/present-simple-positive'} element={<PresentSimplePositive/>}/>
            <Route path={'/grammar/present-simple-negative'} element={<PresentSimpleNegative/>}/>
            <Route path={'/movie'} element={<MoviePage/>}/>
        </Routes>
    );
};

export default observer(RouterContextProvider);