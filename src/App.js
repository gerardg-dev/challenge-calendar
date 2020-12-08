import React from "react";
import { Provider } from "react-redux";
import { configureStore } from "./store/configureStore";
import AppContainer from "./containers/AppContainer.js";
import "./App.css";

const store = configureStore();

console.log(store.getState());

function App() {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
}

export default App;
