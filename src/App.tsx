import React from 'react';
import {AppStoreContextProvider} from "./context/useAppStore";
import ThemeContextProvider from "./context/ThemeContext";
import RouterContextProvider from "./router/RouterContextProvider";
import {BrowserRouter} from "react-router-dom";

function App() {
    return (
        <ThemeContextProvider>
            <AppStoreContextProvider>
                <BrowserRouter>
                    <RouterContextProvider/>
                </BrowserRouter>
            </AppStoreContextProvider>
        </ThemeContextProvider>
    );
}

export default App;
