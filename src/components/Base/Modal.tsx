import styled from "styled-components";
import Modal from "styled-react-modal";

export const StyledModal = Modal.styled`
  // width: 25rem;
  // height: 17rem;
  width: 98%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primaryLight};
`;
