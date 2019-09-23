import * as React from "react";
import styled from "styled-components";
import NavigationContainer from "../../containers/NavigationContainer";
import strings from "../../config/i18n";

const Content = styled.div`
  max-width: 1600px;
  margin: auto;
  background-color: ${({ theme }) => theme.colors.primaryLight};
`;

export const Layout: React.FC = props => (
  <div>
    <Content>
      <NavigationContainer />
      {props.children}
    </Content>
    <footer>
      <hr />
      <span>
        @2019 {strings.siteTitle}
        <a href="https://github.com/Nedja995/template_nextjs">
          OpenSource Github Repository
        </a>
      </span>
    </footer>
  </div>
);
