import React from "react";
import { connect } from "react-redux";
import { selectJWTToken } from "../reducers/user";
import { selectIsOpenedSignupModal } from "../reducers/user-signup";
import { toggleSignupModal } from "../actions/user-signup";
import { setLanguage, setTheme } from "../actions/config";
import { openLoginModal } from "../actions/user-login";
import { userLogout } from "../actions/user";
import { Navigation } from "../components/Navigation";
import { selectLanguage } from "../reducers/config";

export interface Props {
  isOpenedSignupModal?: boolean;
  isLogedIn: boolean;
  dispatch?: any;
  language: string;
  setLanguage(string): void;
  setTheme(string): void;
}

const NavigationContainer: React.FC<Props> = props => {
  return (
    <Navigation
      isLogedIn={props.isLogedIn}
      setLanguage={language => props.dispatch(setLanguage(language))}
      setTheme={themeName => props.dispatch(setTheme(themeName))}
      onToggleSignupModal={() => props.dispatch(toggleSignupModal())}
      onOpenLoginModal={() => props.dispatch(openLoginModal())}
      onLogout={() => props.dispatch(userLogout())}
    />
  );
};

export default connect(state => ({
  isOpenedSignupModal: selectIsOpenedSignupModal(state),
  isLogedIn: !!selectJWTToken(state),
  language: selectLanguage(state)
}))(NavigationContainer);
