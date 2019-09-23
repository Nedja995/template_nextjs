import React from "react";
import styled from "styled-components";
import { StyledButton } from ".";

const Container = styled.div`
  position: relative;
  display: inline-block;
`;
const DropDownContent = styled.div`
  display: none;
  position: absolute;
  background-color: ${({ theme }) => theme.colors.primaryLight};
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 10;
  ${Container}:hover & {
    display: block;
  }
`;

export interface Props {
  label: any;
  items: string[];
  onClick(string): void;
}

const Dropdown: React.FunctionComponent<Props> = props => (
  <Container>
    {props.label}
    <DropDownContent>
      {props.items.map(i => (
        <StyledButton key={i} onClick={() => props.onClick(i)}>
          {i}
        </StyledButton>
      ))}
    </DropDownContent>
  </Container>
);

export default Dropdown;
