import React, { useState } from "react";
import moment from "moment";
import "./App.css";
import Calendar from "./components/Calendar/index.js";

function App() {
  const [value, setValue] = useState(moment());

  return (
    <div className="App">
      <header className="App-header">
        <Calendar value={value} onChange={setValue} />
      </header>
    </div>
  );
}

export default App;
