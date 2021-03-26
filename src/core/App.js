import { useContext } from 'react';

import { CssBaseline } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import { ThemeStorage, ThemeContext } from '../provider/ThemeContext';

import Routes from './routes';

const App = () => {
  const { darkMode } = useContext(ThemeContext);

  const theme = createMuiTheme({
    palette: {
      type: darkMode,
      primary: {
        main: darkMode === 'dark' ? '#286C75' : '#3fb0ac',
      },
      secondary: {
        main: darkMode === 'dark' ? '#3fb0ac' : '#286C75',
      },
      background: {
        default: darkMode === 'dark' ? '#5D5E5A' : '#dddfd4',
      },
      backgroundReverse: {
        main: darkMode === 'dark' ? '#dddfd4' : '#5D5E5A',
        light: darkMode === 'dark' ? '#A9ABA2' : '#A9ABA4',
      },
    },
    typography: {
      allVariants: {
        fontFamily: 'Poppins',
        color: ({ color }) => {
          switch (color) {
            case 'secondary':
              return darkMode === 'dark' ? '#286C75' : '#3fb0ac';
            case 'secondaryReverse':
              return darkMode === 'dark' ? '#3fb0ac' : '#286C75';
            case 'primaryReverse':
              return darkMode === 'dark' ? '#5D5E5A' : '#dddfd4';
            default:
              return darkMode === 'dark' ? '#dddfd4' : '#5D5E5A';
          }
        },
        textTransform: 'none',
        fontWeight: ({ fontWeight }) => {
          switch (fontWeight) {
            case 'bold':
              return 700;
            default:
              return 400;
          }
        },
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Routes />
      </CssBaseline>
    </ThemeProvider>
  );
};

const Root = () => {
  return (
    <ThemeStorage>
      <App />
    </ThemeStorage>
  );
};

export default Root;
