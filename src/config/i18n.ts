import LocalizedStrings from 'react-localization';
import IAppStrings from './app-strings';


const strings: IAppStrings = new LocalizedStrings({
  en: {
    siteTitle: "Template Project",
    siteDescription: "Template NextJS Typescript Redux?",
    login: "Login",
    logout: "Logout",
    register: "Register",
    searchLabel: "Search articles by name",
    articleThumbnail: {
      controlOpen: "Open / Add to cart",
      controlFavourite: "Add to Favourites",
      controlEdit: "Edit",
    },
    form: {
      enterEmail: "Enter Email",
      enterPassword: "Enter Password",
    },
    info: {
      successTitle: "Success",
      errorTitle: "Error",
      loginSuccessMessage: "Successfully logged in",
      loginErrorMessage: "",
      signupSuccessMessage: "successfully signed up",
      signupErrorMessage: "",
    }
  },
  de: {
    siteTitle: "Vorlagenprojekt",
    siteDescription: "Die Schablone NextJS Typescript Redux?",
    login: "Einloggen",
    logout: "Ausloggen",
    register: "Registrieren",
    searchLabel: "Artikel nach Namen suchen",
    articleThumbnail: {
      controlOpen: "Öffnen / In den Warenkorb legen",
      controlFavourite: "Zu Favoriten hinzufügen",
      controlEdit: "Bearbeiten",
    },
    form: {
      enterEmail: "Email eingeben",
      enterPassword: "Passwort eingeben",
    },
    info: {
      successTitle: "Erfolg",
      errorTitle: "Error",
      loginSuccessMessage: "Successfully logged in",
      loginErrorMessage: "",
      signupSuccessMessage: "Erfolgreich eingeloggt",
      signupErrorMessage: "",
    }
  }
});
export default strings;