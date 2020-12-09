import React, { useState, useEffect } from "react";
import calendarHelper from "../../util/calendarHelper";

import Header from "./Header";
import Days from "./Days";
import Body from "./Body";

import "../../styles/main.scss";

const Calendar = ({ value, onChange, remindersData, onClickRemindersList }) => {
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
    if (beforeToday(day)) return "calendar-component__day-box--before-today";
    if (isSelected(day, value))
      return "calendar-component__day-box--is-selected";
    if (isToday(day)) return "calendar-component__day-box--is-today";
    return "";
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
    <div className="calendar-component__container">
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
        remindersData={remindersData}
        onClickRemindersList={onClickRemindersList}
      />
    </div>
  );
};

export default Calendar;
