// import Link from "next/link";
// import Router from 'next/router'

import styled from "styled-components";
import Dropdown from "./Base/Dropdown";
import { Language } from "styled-icons/fa-solid/Language";
import { ColorLens } from "styled-icons/material/ColorLens";
import strings from "../config/i18n";

const StyledStyleIcon = styled(ColorLens)`
  color: ${({ theme }) => theme.colors.primaryLight};
`;
const StyledLanguageIcon = styled(Language)`
  color: ${({ theme }) => theme.colors.primaryLight};
`;
const LanguageIcon = () => <StyledLanguageIcon size={38} />;
const StyleIcon = () => <StyledStyleIcon size={38} />;

type Props = {
  isLogedIn: boolean;
  setLanguage(string): void;
  setTheme(string): void;
  onToggleSignupModal(): void;
  onOpenLoginModal(): void;
  onLogout(): void;
};

const Nav = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primaryDark};
`;
const NavHeader = styled.div`
  padding: 0px 0px;
  width: 100%;
  display: flex;
  flex-direction: row;
  margin: auto;
`;
const NavLeft = styled.div`
  width: 33.333%;
  max-width: 100px;
  text-align: left;
  display: flex;
  flex-direction: row;
`;
const NavCenter = styled.div`
  width: 33.333%;
  text-align: center;
`;

const NavRight = styled.div`
  margin-left: auto;
  // max-width: 500px;
  display: flex;
  flex-direction: row;
  flex-grow: 0.1;
  justify-content: space-between;
  text-align: center;
  // @media (max-width: 500px) {
  //   flex-direction: column;
  // }
`;

const LinkLabel = styled.a`
  font-size: ${({ theme }) => theme.font.sizeBig};
  font-weight: bold;
  color: white;
  cursor: pointer;
`;

export const Navigation: React.FunctionComponent<Props> = props => (
  <Nav>
    <NavHeader>
      <NavLeft>
        <LinkLabel onClick={() => {}}>
          <Dropdown
            label={<LanguageIcon />}
            onClick={item => props.setLanguage(item)}
            items={["en", "de"]}
          />
        </LinkLabel>
        <LinkLabel onClick={() => {}}>
          <Dropdown
            label={<StyleIcon />}
            onClick={item => props.setTheme(item)}
            items={["primary", "light"]}
          />
        </LinkLabel>
      </NavLeft>
      <NavCenter></NavCenter>

      <NavRight>
        {!props.isLogedIn && (
          <LinkLabel onClick={props.onOpenLoginModal}>
            {strings.login}
          </LinkLabel>
        )}

        {!props.isLogedIn && (
          <LinkLabel onClick={props.onToggleSignupModal}>
            {strings.register}
          </LinkLabel>
        )}
        {props.isLogedIn && (
          <LinkLabel onClick={props.onLogout}>{strings.logout}</LinkLabel>
        )}
      </NavRight>
    </NavHeader>
  </Nav>
);
