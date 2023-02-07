import React from 'react';
import {Route, Routes} from 'react-router-dom'
import {observer} from "mobx-react-lite";
import MainPage from "../pages/MainPage";
import GrammarPage from "../pages/GrammarPage";
import ToBePositive from "../componets/grammar/ToBePositive";
import ToBeNegative from "../componets/grammar/ToBeNegative";
import ToBeQuestionsShortAnswers from "../componets/grammar/ToBeQuestionsShortAnswers";

const RouterContextProvider = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainPage/>}/>
            <Route path={'/grammar'} element={<GrammarPage/>}></Route>
            <Route path={'/grammar/to-be-positive'} element={<ToBePositive/>}/>
            <Route path={'/grammar/to-be-negative'} element={<ToBeNegative/>}/>
            <Route path={'/grammar/to-be-questions-short-answers'} element={<ToBeQuestionsShortAnswers/>}/>
        </Routes>
    );
};

export default observer(RouterContextProvider);