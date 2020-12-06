import "./App.css";

import moment from "moment";

const MomentLibraryDEMO = () => {
  const value = moment();

  const firstDayOfCurrentMonth = value.clone().startOf("month");
  const lastDayOfCurrentMonth = value.clone().endOf("month");

  const firstDayOfCurrentWeek = value.clone().startOf("week");
  const lastDayOfCurrentWeek = value.clone().endOf("week");

  const startDay = value
    .clone()
    .startOf("month")
    .startOf("week");
  const endDay = value
    .clone()
    .endOf("month")
    .endOf("week");

  return (
    <div>
      <div>MOMENT LIBRARY DEMO</div>
      <div>
        First Day of Curr Month: {firstDayOfCurrentMonth.format("MM/DD")}
      </div>
      <div>Last Day of Curr Month: {lastDayOfCurrentMonth.format("MM/DD")}</div>
      <div>First Day of Curr Week: {firstDayOfCurrentWeek.format("MM/DD")}</div>
      <div>Last Day of Curr Week: {lastDayOfCurrentWeek.format("MM/DD")}</div>
      <div>First Calendar Day {startDay.format("MM/DD")}</div>
      <div>Last Calendar Day {endDay.format("MM/DD")}</div>
      <div>
        Curr Calendar Dates Range: {startDay.format("MM/DD")} -{" "}
        {endDay.format("MM/DD")}
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MomentLibraryDEMO />
      </header>
    </div>
  );
}

export default App;
