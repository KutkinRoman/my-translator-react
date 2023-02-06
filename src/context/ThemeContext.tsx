import React from 'react';
import {createTheme, ThemeProvider} from "@mui/material";

const ColorModeContext = React.createContext({
    toggleColorMode: () => {
    }
});

export const useColorMode = () => React.useContext(ColorModeContext);

const ThemeContextProvider = ({children}: { children: React.ReactNode }) => {

    const [mode, setMode] = React.useState<'light' | 'dark'>('light');

    const colorMode = React.useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
            },
        }),
        [],
    );

    const theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                },
            }),
        [mode],
    );

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
};

export default ThemeContextProvider;