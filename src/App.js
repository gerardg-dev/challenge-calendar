import React, { useState } from "react";
import { Provider } from "react-redux";
import { configureStore } from "./store/configureStore";
import moment from "moment";
import Calendar from "./components/Calendar/index.js";
import "./App.css";

const store = configureStore();

console.log(store.getState());

function App() {
  const [value, setValue] = useState(moment());

  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <Calendar value={value} onChange={setValue} />
        </header>
      </div>
    </Provider>
  );
}

export default App;
