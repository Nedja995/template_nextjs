import fetch from 'isomorphic-unfetch';
import Article, { ArticlesResponse } from '../@types/article';
import UserSignupData,
{
  UserLoginSuccess,
  UserLoginData,
} from '../@types/user';
import ResponseError from '../@types/network';
import { PaginationDto } from '../@types/PaginationDto';

const BASE_URL = "http://localhost:3006/v1";
const ARTICLES_URL = `${BASE_URL}/foodArticles`;
const REGISTER_URL = `${BASE_URL}/user/register`
const LOGIN_URL = `${BASE_URL}/users/login`;

// const makeQuery = params => Object.keys(params)
//   .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
//   .join('&');[];

const apiFetchArticles = async (page: number, search?: string, limit?: number): Promise<any> => {
  var url: string = `${ARTICLES_URL}`;
  if (!limit) {
    limit = 20;
  }
  url = `${url}?page=${page}&limit=${limit}`;
  if (search) {
    url = `${url}&filter=${search}`;
  }
  var response = await fetch(url);
  if (!response.ok) {
    let errorResponse: ResponseError = {
      errorMessage: response.statusText,
    }
    return errorResponse;
  }
  let rawJson = await response.json();
  let results: ArticlesResponse = {
    articles: rawJson.docs
  };
  return results;
}
export default apiFetchArticles;

export const apiUserSignup = async (signupData: UserSignupData): Promise<any> => {
  const payload = {
    email: signupData.email,
    password: signupData.password,
  }
  var response = await fetch(REGISTER_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // 'Accept': 'text/html'
      'Accept': 'application/json',

    },
    body: JSON.stringify(payload)
  });
  if (!response.ok) {
    let errorResponse: ResponseError = {
      errorMessage: response.statusText,
    }
    return errorResponse;
  }
  let rawJson = await response.json();
  let results: UserLoginSuccess = {
    authToken: rawJson.auth_token,
    admin: rawJson.admin,
  };
  return results;
}

export const apiUserLogin = async (loginData: UserLoginData): Promise<any> => {
  var response = await fetch(LOGIN_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'text/html'
    },
    body: JSON.stringify(loginData)
  });
  if (!response.ok) {
    let errorResponse: ResponseError = {
      errorMessage: response.statusText,
    }
    return errorResponse;
  }
  let rawJson = await response.json();
  let results: UserLoginSuccess = {
    authToken: rawJson.auth_token,
    admin: rawJson.admin,
  };
  return results;
}
