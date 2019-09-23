import React from "react";
import { NextPage } from "next";
import { connect } from "react-redux";
import InfoModal from "../components/InfoModal";
import {
  selectIsOpened,
  selectMessage,
  selectTitle
} from "../reducers/info-modal";
import { infoModalClose } from "../actions/info-modal";

export interface Props {
  isOpened?: boolean;
  onCloseModal: any;
  title: String;
  message: String;
  dispatch: any;
}

const InfoModalContainer: React.FC<Props> = props => {
  return (
    <InfoModal
      isOpened={props.isOpened}
      title={props.title}
      message={props.message}
      onCloseModal={() => props.dispatch(infoModalClose())}
    />
  );
};

export default connect(state => ({
  isOpened: selectIsOpened(state),
  message: selectMessage(state),
  title: selectTitle(state)
}))(InfoModalContainer);
