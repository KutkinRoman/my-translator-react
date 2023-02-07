import React from 'react';
import {Route, Routes
} from 'react-router-dom'
import {observer} from "mobx-react-lite";
import MainPage from "../pages/MainPage";
import GrammarPage from "../pages/GrammarPage";

const RouterContextProvider = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainPage/>}/>
            <Route path={'/grammar'} element={<GrammarPage/>}/>
        </Routes>
    );
};

export default observer(RouterContextProvider);