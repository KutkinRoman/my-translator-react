import React from 'react';
import MainPage from "./pages/MainPage";
import {AppStoreContextProvider} from "./context/useAppStore";

function App() {
    return (
        <AppStoreContextProvider>
            <MainPage/>
        </AppStoreContextProvider>
    );
}

export default App;
