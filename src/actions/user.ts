import {
  USER_SET_JWT,
  setUserJWTType,
  USER_LOGOUT,
  userLogoutType,
} from '../reducers/user';

export interface UserSetJWT {
  type: setUserJWTType;
  jwt: String;
}
export interface UserLogout {
  type: userLogoutType;
}

export function setUserJWT(jwt: String): UserSetJWT {
  return {
    type: USER_SET_JWT,
    jwt,
  }
};
export function userLogout(): UserLogout {
  return {
    type: USER_LOGOUT,
  }
};
