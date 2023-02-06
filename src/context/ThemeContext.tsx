import React, {useMemo} from 'react';
import {createTheme, ThemeProvider} from "@mui/material";

const ColorModeContext = React.createContext({
    toggleColorMode: () => {
    }
});

export const useColorMode = () => React.useContext(ColorModeContext);

const lightTheme = createTheme({
    palette: {
        mode: 'light',

        secondary: {
            light: '#3f3f46',
            main: '#27272a',
            dark: '#18181b'
        },

        background: {
            default: '#eaeaea',
        },
    },

});


const darkTheme = createTheme({
    palette: {

        mode: 'dark',

        primary: {
            light: '#67e8f9',
            main: '#06b6d4',
            dark: '#0e7490'
        },

        secondary: {
            light: '#fafafa',
            main: '#e5e5e5',
            dark: '#737373'
        },

        background: {
            default: '#1e293b',
            paper: '#1e293b'
        },
    },

});

const newDarkTheme = createTheme({
    palette: {

        mode: 'dark',

        primary: {
            light: '#67e8f9',
            main: '#06b6d4',
            dark: '#0e7490',
            // light: '#ea580c',
            // main: '#ea580c',
            // dark: '#ea580c'
        },

        secondary: {
            light: '#fafafa',
            main: '#e5e5e5',
            dark: '#737373',
            // light: '#ea580c',
            // main: '#ea580c',
            // dark: '#ea580c'
        },

        text: {
            // disabled: '#ea580c',
            // primary: '#ea580c',
            // secondary: '#ea580c'
        },

        divider: '#ff4f00',

        background: {
            // default: '#000810',
            // paper: '#000810'
            default: '#020125',
            paper: '#020125'
        },


    },

});


const ThemeContextProvider = ({children}: { children: React.ReactNode }) => {
    const [mode, setMode] = React.useState<'light' | 'dark'>('dark');

    const colorMode = React.useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
            },
        }),
        [],
    );

    const theme = useMemo(() => {
        if (mode === 'dark') {
            return newDarkTheme
        }
        return lightTheme
    }, [mode])

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
};

export default ThemeContextProvider;