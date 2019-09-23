import {
  toggleSignupModalType,
  USER_TOGGLE_SIGNUP_MODAL,
  USER_OPEN_SIGNUP_MODAL,
  openSignupModalType,
  USER_CLOSE_SIGNUP_MODAL,
  closeSignupModalType,
  userSignupSetData,
  USER_SIGNUP_SET_DATA,
  USER_SIGNUP,
  userSignup,
  USER_SIGNUP_FAILED,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_SET_EMAIL,
  userSignupSetEmailType,
  USER_SIGNUP_SET_PASSWORD,
  userSignupSetPasswordType,
  selectEmail,
  selectPassword,
  selectIsSuccess,
  selectIsFailed,
  selectEmailError,
  selectPasswordError,
} from '../reducers/user-signup';
import { setUserJWT } from '../actions/user';
import UserSignupData from '../@types/user';
import { apiUserSignup } from '../lib/server-api';
import infoModalOpen from './info-modal';
import strings from '../config/i18n';

export interface UserSignupSetData {
  type: userSignupSetData;
  payload: UserSignupData;
}

export interface UserSignupSetEmail {
  type: userSignupSetEmailType;
  email: String;
}
export interface UserSignupSetPassword {
  type: userSignupSetPasswordType;
  password: String;
}

export interface OpenSignupModal {
  type: openSignupModalType;
}

export interface CloseSignupModal {
  type: closeSignupModalType;
}

export interface UserSignup {
  type: userSignup;
  payload: UserSignupData;
}

export interface ToggleSignupModal {
  type: toggleSignupModalType;
}

export function openSignupModal(): OpenSignupModal {
  return {
    type: USER_OPEN_SIGNUP_MODAL,
  }
};

export function closeSignupModal(): CloseSignupModal {
  return {
    type: USER_CLOSE_SIGNUP_MODAL,
  }
};

export function toggleSignupModal(): ToggleSignupModal {
  return {
    type: USER_TOGGLE_SIGNUP_MODAL,
  }
};

export default function signupSetData(data: UserSignupData): UserSignupSetData {
  return {
    type: USER_SIGNUP_SET_DATA,
    payload: data,
  }
};

export function signupSetEmail(email: String): UserSignupSetEmail {
  return {
    type: USER_SIGNUP_SET_EMAIL,
    email,
  }
};

export function signupSetPassword(password: String): UserSignupSetPassword {
  return {
    type: USER_SIGNUP_SET_PASSWORD,
    password,
  }
};

export const signup = (): any => {
  return (dispatch: Function, getState: Function) => {
    const state = getState();
    const signupData: UserSignupData = {
      email: selectEmail(state),
      password: selectPassword(state),
    };

    dispatch({
      type: USER_SIGNUP,
      payload: signupData,
    })

    apiUserSignup(signupData).then(response => {
      if (!!response.errorMessage) {
        dispatch({
          type: USER_SIGNUP_FAILED,
          errorMessage: response.errorMessage,
        })
        dispatch(closeSignupModal());
        dispatch(infoModalOpen(strings.info.errorTitle, response.errorMessage));
      } else {
        dispatch({
          type: USER_SIGNUP_SUCCESS,
        });
        dispatch(setUserJWT(response.authToken));
        dispatch(closeSignupModal());
        dispatch(infoModalOpen(strings.info.successTitle, strings.info.signupSuccessMessage));
      }
    });
  }
}
