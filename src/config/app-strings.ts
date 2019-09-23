import { LocalizedStringsMethods } from 'react-localization';

export default interface IAppStrings extends LocalizedStringsMethods {
  siteTitle: string;
  siteDescription: string;
  login: string;
  logout: string;
  register: string;
  searchLabel: string;
  articleThumbnail: {
    controlOpen: string;
    controlFavourite: string;
    controlEdit: string;
  },
  form: {
    enterEmail: string,
    enterPassword: string,
  }
  info: {
    successTitle: string,
    errorTitle: string,
    loginSuccessMessage: string,
    loginErrorMessage: string,
    signupSuccessMessage: string,
    signupErrorMessage: string,
  }
}