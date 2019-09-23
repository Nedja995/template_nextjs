import * as React from "react";
import UserSignupData, { UserSignupResponse } from "../@types/user";
import strings from "../config/i18n";

import { FormContainer, FormHeader, Button, InputField } from "./Base/Form";
import { StyledModal } from "./Base/Modal";

export interface Props {
  isOpen: boolean;
  signupData: UserSignupData;
  signupResponse: UserSignupResponse;
  toggleModal?(): void;
  onSignup?(): any;
  onSetEmail(email: String): void;
  onSetPassword(password: String): void;
}

const SignupModal: React.FunctionComponent<Props> = props => (
  <StyledModal
    isOpen={props.isOpen}
    onBackgroundClick={props.toggleModal}
    onEscapeKeydown={props.toggleModal}
    style={{ height: "20rem" }}
  >
    <FormContainer onSubmit={() => {}}>
      <FormHeader>
        <h3>{strings.register}</h3>
      </FormHeader>
      {InputField(
        "email",
        "email",
        strings.form.enterEmail,
        props.signupData.email,
        props.onSetEmail
      )}
      {InputField(
        "password",
        "password",
        strings.form.enterPassword,
        props.signupData.password,
        props.onSetPassword
      )}
      <div>
        <Button type="submit" value="submit" onClick={() => props.onSignup()}>
          {strings.register}
        </Button>
      </div>
    </FormContainer>
  </StyledModal>
);

export default SignupModal;
