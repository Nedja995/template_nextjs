import { FC } from "react";
import { FormHeader } from "./Base/Form";
import { StyledModal } from "./Base/Modal";

export interface Props {
  isOpened: boolean;
  title: String;
  message: String;
  onCloseModal(): void;
}

const InfoModal: FC<Props> = props => (
  <StyledModal
    id="InfoModal"
    isOpen={props.isOpened}
    onBackgroundClick={props.onCloseModal}
    onEscapeKeydown={props.onCloseModal}
  >
    <FormHeader>
      <h1 id="InfoModalTitle">{props.title}</h1>
    </FormHeader>
    <h3>{props.message}</h3>
  </StyledModal>
);

export default InfoModal;
