import PropTypes from 'prop-types';
import { useMemo } from 'react';
// @mui
import { CssBaseline } from '@mui/material';
import { ThemeProvider as MUIThemeProvider, createTheme, StyledEngineProvider } from '@mui/material/styles';
// import GlobalStyles from './globalStyles';
// import componentsOverride from './overrides';

// ----------------------------------------------------------------------

ThemeProvider.propTypes = {
  children: PropTypes.node,
};

export default function ThemeProvider({ children }) {
  const themeOptions ={
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1440
      }
    },
    color : {
      white: '#FFFFFF',
      black: '#000000',
      red: '#D80027',
      green1: '#03611A',
      green2 : '#8EC542',
      green3 : '#AAD293',
      gray1 : '#8A8988',
      gray2 : '#D6D5DA',
      lightBlack: '#282828'
    },
    // components,
    typography : {
      fontFamily: "'Quicksand', sans-serif",
      fontSmall: "'Mukta Mahee', sans-serif"
    }
  }

  const theme = createTheme(themeOptions);
  // theme.components = componentsOverride(theme);

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {/* <GlobalStyles /> */}
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
}