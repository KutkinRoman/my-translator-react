import React from 'react';
import MainPage from "./pages/MainPage";
import {AppStoreContextProvider} from "./context/useAppStore";
import ThemeContextProvider from "./context/ThemeContext";

function App() {
    return (
        <ThemeContextProvider>
            <AppStoreContextProvider>
                <MainPage/>
            </AppStoreContextProvider>
        </ThemeContextProvider>
    );
}

export default App;
