import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme)
theme.typography.h1 = {
  fontSize: '6rem',
  lineHeight: '80%',
  '@media (min-width:420px)': {
    fontSize: '6rem',
  },
  '@media (min-width:800px)': {
    fontSize: '8rem',
  },
  '@media (min-width:1000px)': {
    fontSize: '10rem',
  },
}


export default theme