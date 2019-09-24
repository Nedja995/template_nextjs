import {
  FetchArticlesType,
  ARTICLES_FETCHING,
  ARTICLES_FETCHING_SUCCEEDED,
  ARTICLES_SET_SEARCH_TEXT,
  SetSearchTextType,
  selectSearchText,
  ARTICLES_FETCHING_FAILED,
} from '../reducers/article';
import apiFetchArticles from '../lib/server-api';

export default interface FetchArticles {
  type: FetchArticlesType;
  page: number;
}

export interface SetSearchText {
  type: SetSearchTextType;
  text: string,
}

export const setArticlesSearchText = (text: string): any => {
  return (dispatch: Function, getState: Function) => {
    dispatch({
      type: ARTICLES_SET_SEARCH_TEXT,
      text,
    })
    dispatch(fetchArticles(0, text));

  }
}

export const fetchArticles = (page: number, search?: string, limit?: number): any => {
  return (dispatch: Function, getState: Function) => {
    const state = getState();
    const searchText = selectSearchText(state);
    dispatch({
      type: ARTICLES_FETCHING,
      searchText,
      page,
    })
    return apiFetchArticles(page, searchText, limit).then(response => {
      if (!!response.errorMessage) {
        dispatch({
          type: ARTICLES_FETCHING_FAILED,
          message: response.errorMessage,
        })
        return [];
      }
      dispatch({
        type: ARTICLES_FETCHING_SUCCEEDED,
        payload: response,
      })
      return response;
    });

  }
}


