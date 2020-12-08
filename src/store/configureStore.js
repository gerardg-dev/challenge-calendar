import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import remindersReducer from "../reducers";

// export function configureStore() {
//   return createStore(remindersReducer);
// }

export function configureStore() {
  return createStore(remindersReducer, composeWithDevTools(applyMiddleware()));
}
