import { createStore } from "redux";
import testReducer from "../sandbox/testReducer";

export function configureStore() {
  return createStore(testReducer);
}
