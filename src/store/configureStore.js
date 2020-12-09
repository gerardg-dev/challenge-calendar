import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import remindersReducer from "../reducers";

export function configureStore() {
  return createStore(
    remindersReducer,
    composeWithDevTools(applyMiddleware(thunk))
  );
}
