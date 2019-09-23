import { createSelector } from 'reselect';

const initialState: any = {
  isOpenedLoginModal: false,
  email: "",
  emailError: "",
  password: "",
  passwordError: "",
  isLoginSending: false,
  isSuccess: false,
  isFailed: false,
};

export const USER_OPEN_LOGIN_MODAL = 'USER_OPEN_LOGIN_MODAL';
export type openLoginModalType = typeof USER_OPEN_LOGIN_MODAL;
export const USER_CLOSE_LOGIN_MODAL = 'USER_CLOSE_LOGIN_MODAL';
export type closeLoginModalType = typeof USER_CLOSE_LOGIN_MODAL;

export const USER_LOGIN_SET_DATA = 'USER_LOGIN_SET_DATA';
export type userLoginSetData = typeof USER_LOGIN_SET_DATA;

export const USER_LOGIN_SET_EMAIL = 'USER_LOGIN_SET_EMAIL';
export type userLoginSetEmailType = typeof USER_LOGIN_SET_EMAIL;

export const USER_LOGIN_SET_PASSWORD = 'USER_LOGIN_SET_PASSWORD';
export type userLoginSetPasswordType = typeof USER_LOGIN_SET_PASSWORD;

export const USER_LOGIN = 'USER_LOGIN';
export type userLogin = typeof USER_LOGIN;

export const USER_LOGIN_FAILED = 'USER_LOGIN_FAILED';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';


export default (state = initialState, action) => {
  switch (action.type) {
    case USER_OPEN_LOGIN_MODAL:
      return {
        ...state,
        isOpenedLoginModal: true,
      };
    case USER_CLOSE_LOGIN_MODAL:
      return {
        ...state,
        isOpenedLoginModal: false,
      };
    case USER_LOGIN_SET_DATA:
      return {
        ...state,
        email: action.payload.email,
        password: action.payload.password,
        isSuccess: false,
        isFailed: false,
      };
    case USER_LOGIN:
      return {
        ...state,
        isLoginSending: true,
        isSuccess: false,
        isFailed: false,
      };
    case USER_LOGIN_FAILED:
      return {
        ...state,
        isLoginSending: false,
        isSuccess: false,
        isFailed: true,
      };
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        isLoginSending: false,
        isSuccess: true,
        isFailed: false,
      };
    case USER_LOGIN_SET_EMAIL:
      return {
        ...state,
        email: action.email,
      };
    case USER_LOGIN_SET_PASSWORD:
      return {
        ...state,
        password: action.password,
      };
    default:
      return state;
  }
};


/*
 * SELECTORS
 */
export const selectUserLogin = state => state.userLogin;

export const selectIsOpenedLoginModal = createSelector(
  [selectUserLogin],
  userLogin => userLogin.isOpenedLoginModal,
);

export const selectEmail = createSelector(
  [selectUserLogin],
  userLogin => userLogin.email,
);

export const selectPassword = createSelector(
  [selectUserLogin],
  userLogin => userLogin.password,
);