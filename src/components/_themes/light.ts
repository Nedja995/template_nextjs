import { DefaultTheme } from 'styled-components';

const lightTheme: DefaultTheme = {
  borderRadius: '5px',

  font: {
    size: '1em',
    sizeSmall: '0.8em',
    sizeBig: '1.8em'
    // primary: 
  },

  colors: {
    main: 'cyan',

    primary: '#EEC384',
    primaryTransparent: 'rgba(238, 195, 132, 0.6)',
    primaryLight: '#FFF6B7',
    primaryDark: '#D4A96A',
    primaryDarkTransparent: 'rgba(212, 169, 106, 0.6)',

    secondary: '#EEDC84',
    secondaryLight: '#FFFFB7',
    secondaryDark: '#D4C26A',

    tertiary: '#EE9384',
    tertiaryTransparent: 'rgba(238, 147, 132, 0.6)',
    tertiaryLight: '#FFC6B7',
    tertiaryDark: '#D4796A',
    tertiaryDarkTransparent: 'rgba(212, 121, 106, 0.6)',


    button: {
      background: 'white',
      label: 'black',
    },
    form: {
      inputBackground: 'white',
    },
    modal: {
      background: 'white',
    },
  },

  breakpoints: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200
  },
}

export { lightTheme }