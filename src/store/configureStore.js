import { createStore } from "redux";
import remindersReducer from "../reducers";

export function configureStore() {
  return createStore(remindersReducer);
}
