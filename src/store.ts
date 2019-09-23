import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from 'redux-thunk'
import rootReducer from "./reducers";

export function initializeStore(initialState = {}) {
  var store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)));
  return store;
}
