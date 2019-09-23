import styled from "styled-components";

export const StyledButton = styled.button`
  width: 100%;
  height: 2rem;
  margin: auto;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.primaryDark};
  font-size: ${({ theme }) => theme.font.size};
  font-weight: bold;
  text-align: center;
  color: white;
  border: 0;
  opacity: 0.9;
  outline: none;
  &:active {
    filter: brightness(20%);
    background-color: ${({ theme }) => theme.colors.primary};
    transition: filter 0.1s;
  }
  &:hover {
    opacity: 1;
    filter: brightness(90%);
    transition: opacity 0.1s;
  }
`;
