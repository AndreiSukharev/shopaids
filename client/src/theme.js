import { createMuiTheme } from '@material-ui/core'


export default createMuiTheme({
  palette: {
    primary: {
      main: '#E25F3E',
      dark: '#B99471',
      light: '#F0E4D7'
    },
    secondary: {
      main: '#5156B5',
      dark: '#353BA8',
      light: '#777CCB'
    },
    background: {
      paper: 'rgba(250, 248, 248, 0.92)'
    },
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 30
      }
    },
    MuiButtonBase: {
      root: {
        borderRadius: 30
      }
    }
  },
})