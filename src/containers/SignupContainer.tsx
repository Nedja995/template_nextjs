import React from "react";
import { NextPage } from "next";
import { connect } from "react-redux";
import signupSetData, {
  toggleSignupModal,
  signup,
  signupSetEmail,
  signupSetPassword
} from "../actions/user-signup";
import {
  selectIsOpenedSignupModal,
  selectPassword,
  selectEmail
} from "../reducers/user-signup";
import UserSignupData, { UserSignupResponse } from "../@types/user";

import SignupModal from "../components/SignupModal";

export interface Props {
  isOpenedSignupModal?: boolean;
  signupData?: UserSignupData;
  signupResponse?: UserSignupResponse;
  dispatch: any;
}

const SignupForm: React.FC<Props> = props => {
  return (
    <SignupModal
      isOpen={props.isOpenedSignupModal}
      toggleModal={() => props.dispatch(toggleSignupModal())}
      signupData={props.signupData}
      signupResponse={props.signupResponse}
      onSignup={() => props.dispatch(signup())}
      onSetPassword={password => props.dispatch(signupSetPassword(password))}
      onSetEmail={email => props.dispatch(signupSetEmail(email))}
    />
  );
};

export default connect(state => ({
  isOpenedSignupModal: selectIsOpenedSignupModal(state),
  signupData: {
    email: selectEmail(state),
    password: selectPassword(state)
  }
}))(SignupForm);
