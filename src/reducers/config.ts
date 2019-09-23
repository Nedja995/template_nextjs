import { string } from "prop-types";
import { createSelector } from 'reselect';

export const CONFIG_SET_LANGUAGE = 'CONFIG_SET_LANGUAGE';
export type configSetLanguageType = typeof CONFIG_SET_LANGUAGE;

export const CONFIG_SET_THEME = 'CONFIG_SET_THEME';
export type configSetThemeType = typeof CONFIG_SET_THEME;

export default (state = {
  language: "en",
  theme: 'primary',
}, action) => {
  switch (action.type) {
    case CONFIG_SET_LANGUAGE:
      return {
        ...state,
        language: action.language,
      };
    case CONFIG_SET_THEME:
      return {
        ...state,
        theme: action.theme,
      };
    default:
      return state;
  }
};

/*
 * SELECTORS
 */
export const selectConfig = state => state.config;

export const selectLanguage = createSelector(
  [selectConfig],
  config => config.language,
);

export const selectTheme = createSelector(
  [selectConfig],
  config => config.theme,
);
