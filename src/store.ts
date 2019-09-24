import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from 'redux-thunk'
import rootReducer from "./reducers";
import { infoMiddleware } from './middlewares/infoMiddleware';

export function initializeStore(initialState = {}) {
  var store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(
      thunkMiddleware,
      // infoMiddleware
    ))
  );
  return store;
}
