import PropTypes from 'prop-types';
// @mui
import { CssBaseline } from '@mui/material';
import { ThemeProvider as MUIThemeProvider, createTheme, StyledEngineProvider } from '@mui/material/styles';
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
      red: '#F48123',
      green2 : '#8EC542',
      green3 : '#AAD293',
      green1: '#39A03D',
      gray1 : '#8A8988',
      gray2 : '#D6D5DA',
      lightBlack: '#282828'
    },
    // components,
    typography : {
      fontFamily: "'Quicksand', sans-serif",
      MuktaMahee: "'Mukta Mahee', sans-serif"
    }
  }

  const theme = createTheme(themeOptions);

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
}