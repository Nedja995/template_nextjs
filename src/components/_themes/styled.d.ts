// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string

    font: {
      size: string
      sizeSmall: string
      sizeBig: string
    }

    colors: {
      main: string

      primary: string
      primaryTransparent: string
      primaryLight: string
      primaryDark: string
      primaryDarkTransparent: string

      secondary: string
      secondaryLight: string
      secondaryDark: string

      tertiary: string
      tertiaryTransparent: string;
      tertiaryLight: string
      tertiaryDark: string
      tertiaryDarkTransparent: string;

      button: {
        background: string
        label: string
      }
      form: {
        inputBackground: string
      }
      modal: {
        background: string,
      }
    }

    breakpoints: {
      xs: number
      sm: number
      md: number
      lg: number
      xl: number
    }
  }
}