import { DefaultTheme } from 'styled-components';

const primaryTheme: DefaultTheme = {
  borderRadius: '5px',

  font: {
    size: '1em',
    sizeSmall: '0.8em',
    sizeBig: '1.8em'
    // primary: 
  },

  colors: {
    main: 'cyan',

    primary: '#D4A96A',
    primaryTransparent: 'rgba(212, 169, 106, 0.6)',
    primaryLight: '#FFDCAA',
    primaryDark: '#AA7C39',
    primaryDarkTransparent: 'rgba(170, 124, 57, 0.6)',

    secondary: '#D4C26A',
    secondaryLight: '#FFF0AA',
    secondaryDark: '#AA9639',

    tertiary: '#D4796A',
    tertiaryTransparent: 'rgba(212, 121, 106, 0.6)',
    tertiaryLight: '#FFB6AA',
    tertiaryDark: '#AA4839',
    tertiaryDarkTransparent: 'rgba(170, 72, 57, 0.6)',


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

export { primaryTheme }