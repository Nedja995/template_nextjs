import { createSelector } from 'reselect';
import Article from "../@types/article";
import { string } from 'prop-types';

export const ARTICLES_FETCHING = 'ARTICLES_FETCHING';
export type FetchArticlesType = typeof ARTICLES_FETCHING;

export const ARTICLES_FETCHING_START = 'ARTICLES_FETCHING_START';
export const ARTICLES_FETCHING_SUCCEEDED = 'ARTICLES_FETCHING_SUCCEEDED';
export const ARTICLES_FETCHING_FAILED = 'ARTICLES_FETCHING_FAILED';

export const ARTICLES_SET_SEARCH_TEXT = 'ARTICLES_SET_SEARCH_TEXT';
export type SetSearchTextType = typeof ARTICLES_SET_SEARCH_TEXT;

const initialState: any = {
  isFetching: false,
  page: 0,
  articles: [],
  searchText: "",
};
const StateType = typeof initialState;

export default (state = initialState, action) => {
  switch (action.type) {
    case ARTICLES_FETCHING_START:
      return {
        ...state,
        isFetching: true,
      };
    case ARTICLES_FETCHING_FAILED:
      return {
        ...state,
        isFetching: false,
      };
    case ARTICLES_FETCHING_SUCCEEDED:
      return {
        ...state,
        isFetching: false,
        articles: [
          ...state.articles,
          ...action.payload.articles || [],
        ],
        page: action.payload.page,
      }
    case ARTICLES_SET_SEARCH_TEXT:
      return {
        ...state,
        searchText: action.text,
        articles: [],
      }
    default:
      return state;
  }
};


/*
 * SELECTORS
 */
export const selectArticle = state => state.article;

export const selectArticles = createSelector(
  [selectArticle],
  article => article.articles,
);

export const selectSearchText = createSelector(
  [selectArticle],
  article => article.searchText,
);



