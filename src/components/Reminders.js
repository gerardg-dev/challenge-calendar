import React, { useState } from "react";

import VisibilityIcon from "@material-ui/icons/Visibility";
import CreateIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/Delete";

import "../styles/main.scss";

const hours = [
  "00:00",
  "01:00",
  "02:00",
  "03:00",
  "04:00",
  "05:00",
  "06:00",
  "07:00",
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
  "22:00",
  "23:00"
];

const renderReminders = (
  remindersData,
  hrIndex,
  onLookupReminder,
  onUpdateReminder,
  onDeleteReminder
) => {
  if (
    remindersData === undefined ||
    remindersData === null ||
    remindersData.length === 0
  ) {
    return;
  }

  return remindersData.map((reminder, index) => {
    if (reminder && parseInt(reminder.hour) === parseInt(hrIndex)) {
      return (
        <div
          key={index}
          className="reminders-component__container--single-reminder"
        >
          <div className="reminders-component__container--single-reminder-opts">
            <div
              className="reminders-component__button--lookup-reminder"
              onClick={() => onLookupReminder(reminder.date, reminder.id)}
            >
              <VisibilityIcon color="inherit" fontSize="inherit" />
            </div>
            <div
              className="reminders-component__button--update-reminder"
              onClick={() => onUpdateReminder(reminder.date, reminder.id)}
            >
              <CreateIcon color="inherit" fontSize="inherit" />
            </div>
            <div
              className="reminders-component__button--delete-reminder"
              onClick={() => onDeleteReminder(reminder.date, reminder.id)}
            >
              <DeleteIcon color="inherit" fontSize="inherit" />
            </div>
          </div>
          <div className="reminders-component__container--single-reminder-content">
            <div
              style={{
                width: "15px",
                height: "15px",
                borderRadius: "2000px",
                backgroundColor: `${reminder.color}`
              }}
            />
            <div style={{ width: "10px" }}></div>
            {reminder.textarea}
          </div>
        </div>
      );
    }
  });
};

const renderHours = (
  remindersData,
  onLookupReminder,
  onUpdateReminder,
  onDeleteReminder
) => {
  return hours.map((hr, index) => {
    return (
      <div key={index} className="reminders-component__container--hours">
        <div className="reminders-component__container--hr">{hr}</div>
        <div className="reminders-component__container--reminders">
          {renderReminders(
            remindersData,
            index,
            onLookupReminder,
            onUpdateReminder,
            onDeleteReminder
          )}
        </div>
      </div>
    );
  });
};

const Reminders = ({
  date,
  remindersData,
  onSelectReminder,
  onLookupReminder,
  onUpdateReminder,
  onDeleteReminder,
  onDeleteAllReminders
}) => {
  return (
    <div className="reminders-component__container">
      <div className="reminders-component__text--title">
        {`REMINDERS FOR ${date}`}
      </div>
      {remindersData.length === 0 && (
        <div className="reminders-component__text--subtitle">
          NO REMINDERS FOUND FOR THIS DAY
        </div>
      )}
      {renderHours(
        remindersData,
        onLookupReminder,
        onUpdateReminder,
        onDeleteReminder
      )}
      {remindersData.length > 0 && (
        <div
          className="reminders-component__button--delete-all"
          onClick={onDeleteAllReminders}
        >
          DELETE ALL REMINDERS FOR THIS DAY
        </div>
      )}
    </div>
  );
};

export default Reminders;

Reminders.defaultProps = {
  date: null,
  remindersData: [],
  onSelectReminder: () => console.log("A reminder has been selected!"),
  onLookupReminder: () => console.log("Lookup reminder!"),
  onUpdateReminder: () => console.log("Update reminder!"),
  onDeleteReminder: () => console.log("Delete reminder!"),
  onDeleteAllReminders: () => console.log("Delete all reminders!")
};
