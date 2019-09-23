import React from "react";
import { NextPage } from "next";
import { connect } from "react-redux";
import loginSetData, {
  login,
  closeLoginModal,
  loginSetEmail,
  loginSetPassword
} from "../actions/user-login";
import {
  selectIsOpenedLoginModal,
  selectEmail,
  selectPassword
} from "../reducers/user-login";
import { UserLoginErrors, UserLoginData } from "../@types/user";

import LoginModal from "../components/LoginModal";

export interface Props {
  isOpenedLoginModal: boolean;
  loginData: UserLoginData;
  loginErrors: UserLoginErrors;
  dispatch: any;
}

const LoginFormContainer: React.FC<Props> = props => {
  return (
    <LoginModal
      isOpen={props.isOpenedLoginModal}
      closeModal={() => props.dispatch(closeLoginModal())}
      loginData={props.loginData}
      loginErrors={props.loginErrors}
      onLogin={() => props.dispatch(login())}
      onSetEmail={email => props.dispatch(loginSetEmail(email))}
      onSetPassword={password => props.dispatch(loginSetPassword(password))}
    />
  );
};

export default connect(state => ({
  isOpenedLoginModal: selectIsOpenedLoginModal(state),
  loginData: {
    email: selectEmail(state),
    password: selectPassword(state)
  }
}))(LoginFormContainer);
