import { FC } from "react";
import { UserLoginData, UserLoginErrors } from "../@types/user";
import { FormContainer, FormHeader, Button, InputField } from "./Base/Form";
import { StyledModal } from "./Base/Modal";
import strings from "../config/i18n";

export interface Props {
  isOpen: boolean;
  loginData: UserLoginData;
  loginErrors: UserLoginErrors;
  closeModal?(): void;
  onSetData?(): void;
  onSetEmail(email: String): void;
  onSetPassword(password: String): void;
  onLogin?(): any;
}

const LoginModal: FC<Props> = props => (
  <StyledModal
    id="LoginModal"
    isOpen={props.isOpen}
    onBackgroundClick={props.closeModal}
    onEscapeKeydown={props.closeModal}
  >
    <FormContainer id="LoginFormContainer" onSubmit={() => {}}>
      <FormHeader id="LoginFormHeader">
        <h2 id="LoginModalTitle">{strings.login}</h2>
      </FormHeader>
      {InputField(
        "email",
        "email",
        strings.form.enterEmail,
        props.loginData.email,
        props.onSetEmail
      )}
      {InputField(
        "password",
        "password",
        strings.form.enterPassword,
        props.loginData.password,
        props.onSetPassword
      )}
      <div>
        <Button type="submit" value="submit" onClick={() => props.onLogin()}>
          {strings.login}
        </Button>
      </div>
    </FormContainer>
  </StyledModal>
);

export default LoginModal;
