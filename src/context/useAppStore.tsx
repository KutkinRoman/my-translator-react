import React, {createContext, useContext} from "react";
import {AppStore} from "../data/store/AppStore";

const AppStoreContext = createContext<AppStore | null>(null);
interface AppStoreContextProvider {
    children: React.ReactNode
}

export const AppStoreContextProvider = ({children}: AppStoreContextProvider) => {
    return (
        <AppStoreContext.Provider value={new AppStore()} children={children}/>
    )
}

export const useAppStore = () => {
    const appStore = useContext(AppStoreContext)
    if (appStore === null) {
        throw new Error('AppStore is null')
    }
    return appStore;
}
