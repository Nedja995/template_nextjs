import { createSelector } from 'reselect';

export const INFO_MODAL_OPEN = 'INFO_MODAL_OPEN';
export type infoModalOpenType = typeof INFO_MODAL_OPEN;

export const INFO_MODAL_CLOSE = 'INFO_MODAL_CLOSE';
export type infoModalCloseType = typeof INFO_MODAL_CLOSE;

export default (state = {
  isOpened: false,
  title: String,
  message: String,
}, action) => {
  switch (action.type) {
    case INFO_MODAL_OPEN:
      return {
        ...state,
        isOpened: true,
        title: action.title,
        message: action.message,
      };
    case INFO_MODAL_CLOSE:
      return {
        ...state,
        isOpened: false,
      };
    default:
      return state;
  }
};


/*
 * SELECTORS
 */
export const selectInfoModal = state => state.infoModal;

export const selectIsOpened = createSelector(
  [selectInfoModal],
  infoModal => infoModal.isOpened,
);

export const selectTitle = createSelector(
  [selectInfoModal],
  infoModal => infoModal.title,
);

export const selectMessage = createSelector(
  [selectInfoModal],
  infoModal => infoModal.message,
);
