import { combineReducers } from "redux";
import user from './user';
import userSignup from './user-signup';
import userLogin from './user-login';
import article from './article';
import infoModal from './info-modal';
import config from './config';

const rootReducer = combineReducers({
  user,
  userSignup,
  userLogin,
  article,
  infoModal,
  config,
});
export default rootReducer;