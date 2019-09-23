import {
  CONFIG_SET_LANGUAGE,
  configSetLanguageType,
  CONFIG_SET_THEME,
  configSetThemeType,
} from '../reducers/config';
import strings from '../config/i18n';

export interface ConfigSetLanguage {
  type: configSetLanguageType;
  language: string,
}
export interface ConfigSetTheme {
  type: configSetThemeType;
  theme: string,
}

export const setLanguage = (language: string): any => {
  return (dispatch: Function, getState: Function) => {
    strings.setLanguage(language);
    dispatch({
      type: CONFIG_SET_LANGUAGE,
      language,
    });
  }
}

export const setTheme = (theme: string): any => {
  return (dispatch: Function, getState: Function) => {
    dispatch({
      type: CONFIG_SET_THEME,
      theme,
    });
  }
}

