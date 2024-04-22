import { CssBaseline } from "@mui/material";
import { ThemeProvider as MUIThemeProvider, createTheme } from "@mui/material/styles";
import { StyledEngineProvider } from "@mui/material";

import { colors } from "@common/styles";

import { components } from "./components";
import { GlobalStyles } from "./globalStyles";
import palettes from "./palettes";
import * as typography from "./typography";

export const ThemeProvider = ({ children }) => {
    const name = "light";
    const { palette } = createTheme({ palette: palettes[name] });

    palette.augmentColor({
        color: {
            main: colors.KIARed[500],
        },
        name: "custom",
    });

    const themes = createTheme(
        {
            typography: typography.options,
            components: components(palette),
            palette,
        },
        {
            typography: typography.overrides,
        }
    );

    return (
        <StyledEngineProvider injectFirst>
            <MUIThemeProvider theme={themes}>
                <CssBaseline />
                <GlobalStyles />
                {children}
            </MUIThemeProvider>
        </StyledEngineProvider>
    );
};
