import {
  infoModalOpenType,
  INFO_MODAL_OPEN,
  infoModalCloseType,
  INFO_MODAL_CLOSE
} from '../reducers/info-modal';


export interface InfoModalOpen {
  type: infoModalOpenType;
  title: String,
  message: String,
}

export interface InfoModalClose {
  type: infoModalCloseType;
}

export default function infoModalOpen(title: String, message: String): InfoModalOpen {
  return {
    type: INFO_MODAL_OPEN,
    title,
    message,
  }
};

export function infoModalClose(): InfoModalClose {
  return {
    type: INFO_MODAL_CLOSE,
  }
};

