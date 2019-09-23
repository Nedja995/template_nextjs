import * as React from "react";
import styled from "styled-components";
import { Search } from "styled-icons/boxicons-regular/Search";
import strings from "../../config/i18n";
const StyledSearchIcon = styled(Search)`
  color: ${({ theme }) => theme.colors.primaryDark};
`;

export interface Props {
  searchText: string;
  setSearchText(text: String): void;
}

const Container = styled.a`
  display: flex;
  align-items: center;
  padding: 5px 10px;
  background: white;
`;

const Input = styled.input`
  width: 26rem;
  border: 1px solid #dfe5ea;
  padding: 15px 10px;
  caret-color: green;
  color: #334144;
  border: 0px;
  background-color: white;
  @media (max-width: 500px) {
    width: 16rem;
  }
`;

const Button = styled.button`
  background-color: white;
  border: 0;
  &:active {
    outline: 0;
    background-color: #e1e1e1;
  }
  &:focus {
    outline: 0;
  }
  &:hover {
    outline: 0;
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }

  cursor: pointer;
`;

const InputField = (id, type, placeHolder, value, onChange) => {
  return (
    <Input
      type={type}
      name={id}
      id={id}
      value={value}
      placeholder={placeHolder}
      onChange={e => onChange(e.target.value)}
      required
    />
  );
};

const SearchInput: React.FunctionComponent<Props> = props => (
  <Container>
    {InputField(
      "text",
      "text",
      strings.searchLabel,
      props.searchText,
      props.setSearchText
    )}
    <Button>
      <StyledSearchIcon size="48" />
    </Button>
  </Container>
);

export default SearchInput;
