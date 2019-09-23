import { createSelector } from 'reselect';

export const USER_OPEN_SIGNUP_MODAL = 'USER_OPEN_SIGNUP_MODAL';
export type openSignupModalType = typeof USER_OPEN_SIGNUP_MODAL;
export const USER_CLOSE_SIGNUP_MODAL = 'USER_CLOSE_SIGNUP_MODAL';
export type closeSignupModalType = typeof USER_CLOSE_SIGNUP_MODAL;
export const USER_TOGGLE_SIGNUP_MODAL = 'USER_TOGGLE_SIGNUP_MODAL';
export type toggleSignupModalType = typeof USER_TOGGLE_SIGNUP_MODAL;

export const USER_SIGNUP_SET_DATA = 'USER_SIGNUP_SET_DATA';
export type userSignupSetData = typeof USER_SIGNUP_SET_DATA;

export const USER_SIGNUP_SET_EMAIL = 'USER_SIGNUP_SET_EMAIL';
export type userSignupSetEmailType = typeof USER_SIGNUP_SET_EMAIL;
export const USER_SIGNUP_SET_PASSWORD = 'USER_SIGNUP_SET_PASSWORD';
export type userSignupSetPasswordType = typeof USER_SIGNUP_SET_PASSWORD;

export const USER_SIGNUP = 'USER_SIGNUP';
export type userSignup = typeof USER_SIGNUP;

export const USER_SIGNUP_FAILED = 'USER_SIGNUP_FAILED';

export const USER_SIGNUP_SUCCESS = 'USER_SIGNUP_SUCCESS';

export default (state = {
  isOpenedSignupModal: false,
  email: String,
  emailError: String,
  password: String,
  passwordError: String,
  isSignupSending: false,
  isSuccess: false,
  isFailed: false,
}, action) => {
  switch (action.type) {
    case USER_OPEN_SIGNUP_MODAL:
      return {
        ...state,
        isOpenedSignupModal: true,
      };
    case USER_CLOSE_SIGNUP_MODAL:
      return {
        ...state,
        isOpenedSignupModal: false,
      };
    case USER_TOGGLE_SIGNUP_MODAL:
      return {
        ...state,
        isOpenedSignupModal: !state.isOpenedSignupModal,
      };
    case USER_SIGNUP_SET_DATA:
      return {
        ...state,
        email: action.payload.email,
        password: action.payload.password,
        isSuccess: false,
        isFailed: false,
      };
    case USER_SIGNUP:
      return {
        ...state,
        isSignupSending: true,
        isSuccess: false,
        isFailed: false,
      };
    case USER_SIGNUP_FAILED:
      return {
        ...state,
        isSignupSending: false,
        isSuccess: false,
        isFailed: true,
      };
    case USER_SIGNUP_SUCCESS:
      return {
        ...state,
        isSignupSending: false,
        isSuccess: true,
        isFailed: false,
      };
    case USER_SIGNUP_SET_EMAIL:
      return {
        ...state,
        email: action.email,
      };
    case USER_SIGNUP_SET_PASSWORD:
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
export const selectUserSignup = state => state.userSignup;

export const selectIsOpenedSignupModal = createSelector(
  [selectUserSignup],
  userSignup => userSignup.isOpenedSignupModal,
);

export const selectEmail = createSelector(
  [selectUserSignup],
  userSignup => userSignup.email,
);

export const selectPassword = createSelector(
  [selectUserSignup],
  userSignup => userSignup.password,
);

export const selectIsSuccess = createSelector(
  [selectUserSignup],
  userSignup => userSignup.isSuccess,
);

export const selectIsFailed = createSelector(
  [selectUserSignup],
  userSignup => userSignup.isFailed,
);

export const selectEmailError = createSelector(
  [selectUserSignup],
  userSignup => userSignup.emailError,
);

export const selectPasswordError = createSelector(
  [selectUserSignup],
  userSignup => userSignup.passwordError,
);
