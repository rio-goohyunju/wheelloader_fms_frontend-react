import { CssBaseline } from '@mui/material';
import {
  ThemeProvider as MUIThemeProvider,
  createTheme,
  StyledEngineProvider,
} from '@mui/material/styles';

import { components } from './components';
import { GlobalStyles } from './globalStyles';
import palettes from './palettes';
import * as typography from './typography';

export const ThemeProvider = ({ children }) => {
  const name = 'light';
  const { palette } = createTheme({ palette: palettes[name] });

  palette.augmentColor({
    color: {
      main: '#55299e',
    },
    name: 'custom',
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
