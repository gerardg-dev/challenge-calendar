import {
  SELECT_DAY,
  CREATE_REMINDER,
  SET_ACTIVE_REMINDER
} from "../constants/ActionTypes";

export const selectDay = day => {
  return {
    type: SELECT_DAY,
    payload: day
  };
};

export const createReminder = reminderObject => {
  return {
    type: CREATE_REMINDER,
    payload: reminderObject
  };
};

export const setActiveReminder = payload => {
  // expects an object with 2 props --> reminder.date, reminder.id
  // payload --> { date, id }
  return {
    type: SET_ACTIVE_REMINDER,
    payload: payload
  };
};
