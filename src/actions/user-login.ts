import {
  USER_OPEN_LOGIN_MODAL,
  openLoginModalType,
  USER_CLOSE_LOGIN_MODAL,
  closeLoginModalType,
  USER_LOGIN_SET_DATA,
  userLoginSetData,
  selectIsOpenedLoginModal,
  selectEmail,
  selectPassword,
  USER_LOGIN,
  userLogin,
  USER_LOGIN_FAILED,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_SET_EMAIL,
  userLoginSetEmailType,
  USER_LOGIN_SET_PASSWORD,
  userLoginSetPasswordType,
} from '../reducers/user-login';
import { UserLoginData } from '../@types/user';
import { setUserJWT } from './user';
import { apiUserSignup, apiUserLogin } from '../lib/server-api';
import infoModalOpen from './info-modal';
import strings from '../config/i18n';

export interface UserLoginSetData {
  type: userLoginSetData;
  payload: UserLoginData;
}

export interface UserLoginSetEmail {
  type: userLoginSetEmailType;
  email: String;
}

export interface UserLoginSetPassword {
  type: userLoginSetPasswordType;
  password: String;
}

export interface OpenLoginModal {
  type: openLoginModalType;
}

export interface CloseLoginModal {
  type: closeLoginModalType;
}

export interface UserLogin {
  type: userLogin;
  payload: UserLoginData;
}

export function openLoginModal(): OpenLoginModal {
  return {
    type: USER_OPEN_LOGIN_MODAL,
  }
};

export function closeLoginModal(): CloseLoginModal {
  return {
    type: USER_CLOSE_LOGIN_MODAL,
  }
};

export default function loginSetData(data: UserLoginData): UserLoginSetData {
  return {
    type: USER_LOGIN_SET_DATA,
    payload: data,
  }
};

export function loginSetEmail(email: String): UserLoginSetEmail {
  return {
    type: USER_LOGIN_SET_EMAIL,
    email,
  }
};

export function loginSetPassword(password: String): UserLoginSetPassword {
  return {
    type: USER_LOGIN_SET_PASSWORD,
    password,
  }
};

export const login = (): any => {
  return (dispatch: Function, getState: Function) => {
    const state = getState();
    const loginData: UserLoginData = {
      email: selectEmail(state),
      password: selectPassword(state),
    };
    dispatch({
      type: USER_LOGIN,
      payload: loginData,
    })

    apiUserLogin(loginData).then(response => {
      if (response.errorMessage) {
        dispatch({
          type: USER_LOGIN_FAILED,
          errorMessage: response.errorMessage,
        })
        dispatch(closeLoginModal());
        dispatch(infoModalOpen(strings.info.errorTitle, response.errorMessage));
      } else {
        dispatch({
          type: USER_LOGIN_SUCCESS,
        });
        dispatch(setUserJWT(response.authToken));
        dispatch(closeLoginModal());
        dispatch(infoModalOpen(strings.info.successTitle, strings.info.loginSuccessMessage));
      }
    });
  }
}
