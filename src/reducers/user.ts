import User from '../@types/user';
import { createSelector } from 'reselect';

export const USER_SET_JWT = 'USER_SET_JWT';
export type setUserJWTType = typeof USER_SET_JWT;

export const USER_LOGOUT = 'USER_LOGOUT';
export type userLogoutType = typeof USER_LOGOUT;

export default (state = {
  email: "",
  id: "",
  jwt: "",
  isLogedIn: false,
}, action) => {
  switch (action.type) {
    case USER_SET_JWT:
      return {
        ...state,
        jwt: action.jwt,
        isLogedIn: !!action.jwt,
      };
    case USER_LOGOUT:
      return {
        ...state,
        jst: '',
        isLogedIn: false,
      }
    default:
      return state;
  }
};


/*
 * SELECTORS
 */
export const selectUser = state => state.user;

export const selectJWTToken = createSelector(
  [selectUser],
  user => user.jwt,
);

export const selectIsLogedIn = createSelector(
  [selectUser],
  user => user.isLogedIn,
);

export const selectEmail = createSelector(
  [selectUser],
  user => user.email,
);
