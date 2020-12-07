import React, { useState, useEffect } from "react";
import calendarHelper from "../../util/calendarHelper";

import Header from "./Header";
import Days from "./Days";
import Body from "./Body";

const Calendar = ({ value, onChange }) => {
  const [calendar, setCalendar] = useState([]);

  useEffect(() => {
    setCalendar(calendarHelper(value));
  }, [value]);

  function isSelected(day, value) {
    return value.isSame(day, "day");
  }

  function beforeToday(day) {
    return day.isBefore(new Date(), "day");
  }

  function isToday(day) {
    return day.isSame(new Date(), "day");
  }

  function dayStyles(day, value) {
    if (beforeToday(day))
      return { color: "lightGray", backgroundColor: "white" };
    if (isSelected(day, value))
      return { color: "white", backgroundColor: "red" };
    if (isToday(day)) return { color: "white", backgroundColor: "blue" };
    return {};
  }

  function currMonthName() {
    return value.format("MMMM");
  }

  function currYear() {
    return value.format("YYYY");
  }

  function prevMonth() {
    return value.clone().subtract(1, "month");
  }

  function nextMonth() {
    return value.clone().add(1, "month");
  }

  return (
    <div
      style={{
        border: "solid 4px lightGray",
        width: "100%",
        minWidth: "200px",
        maxWidth: "600px",
        margin: "10px"
      }}
    >
      <Header
        onChange={onChange}
        currMonthName={currMonthName}
        currYear={currYear}
        prevMonth={prevMonth}
        nextMonth={nextMonth}
      />
      <Days />
      <Body
        onChange={onChange}
        calendar={calendar}
        dayStyles={dayStyles}
        value={value}
      />
    </div>
  );
};

export default Calendar;
