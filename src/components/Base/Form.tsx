import styled from "styled-components";
import { StyledButton } from ".";

export const FormContainer = styled.div`
  width: 90%;
  * {
    margin: 5px;
  }
`;

export const FormHeader = styled.div`
  font-size: ${({ theme }) => theme.font.sizeBig};
  text-align: center;
`;

export const FormContent = styled.div`
  border-radius: 1px;
  border: 1px solid gray;
  background-color: ${({ theme }) => theme.colors.secondaryLight};
  flex-direction: column;
  align-items: flex-start;
  padding: 0.6em;
  label {
    text-align: left;
    font-size: 0.8em;
    width: 90%;
    color: black;
    font-size: ${({ theme }) => theme.font.sizeSmall};
  }
  input {
    text-align: left;
    width: 90%;
    color: gray;
    background-color: ${({ theme }) => theme.colors.secondaryLight};
    border: 0;
    font-size: ${({ theme }) => theme.font.sizeSmall};
  }
  input:focus {
    outline: 0;
  }
`;

export const Button = styled(StyledButton)`
  height: 3rem;
`;

export const InputField = (id, type, placeHolder, value, onChange) => {
  return (
    <FormContent>
      <input
        type={type}
        name={id}
        id={id}
        // value={value}
        placeholder={placeHolder}
        onChange={e => onChange(e.target.value)}
        required
      />
    </FormContent>
  );
};
