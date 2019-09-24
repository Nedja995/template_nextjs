import fetch from 'isomorphic-unfetch';
import Article, { ArticlesResponse } from '../@types/article';
import UserSignupData,
{
  UserLoginSuccess,
  UserLoginData,
} from '../@types/user';
import ResponseError from '../@types/network';
import { PaginationDto } from '../@types/PaginationDto';
import constants from '../config/constants';

const BASE_URL = constants.SERVER_URL;
const ARTICLES_URL = `${BASE_URL}/foodArticles`;
const REGISTER_URL = `${BASE_URL}/users/register`
const LOGIN_URL = `${BASE_URL}/users/login`;

// const makeQuery = params => Object.keys(params)
//   .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
//   .join('&');[];

const apiFetchArticles = async (page: number, search?: string, limit?: number): Promise<any> => {
  if (constants.FAKE_SERVER) {
    console.warn("USING FAKE_SERVER");
    // RETURN SAMPLE DATA
    const sampleData = await require('./sample-data');
    let results: ArticlesResponse = {
      articles: sampleData.sampleArticles
    };
    return results;
  }
  var url: string = `${ARTICLES_URL}`;
  if (!limit) {
    limit = 20;
  }
  url = `${url}?page=${page}&limit=${limit}`;
  if (search) {
    url = `${url}&filter=${search}`;
  }
  var response: any = { ok: false, statusText: 'error' };
  try {
    response = await fetch(url);
  } catch (e) {
    console.error(e.message);
    let errorResponse: ResponseError = {
      errorMessage: e.message,
    }
  }

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
