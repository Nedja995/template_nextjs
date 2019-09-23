export default interface UserSignupData {
  email: string,
  password: string,
}

export interface UserLoginData {
  email: string,
  password: string,
}

export interface UserSignupResponse {
  emailError?: string,
  passwordError?: string,
  isSignupSending?: boolean,
  isSuccess?: boolean,
  isFailed?: boolean,
}
export interface UserLoginSuccess {
  authToken: string,
  admin: boolean,
}
export interface UserLoginErrors {
  emailError?: string,
  passwordError?: string,
}
export interface User {
  email: string,
  id: string;
  jwt: string;
}
