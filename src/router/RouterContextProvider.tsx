import React from 'react';
import {Route, Routes
} from 'react-router-dom'
import {observer} from "mobx-react-lite";
import MainPage from "../pages/MainPage";

const RouterContextProvider = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainPage/>}/>
        </Routes>
    );
};

export default observer(RouterContextProvider);