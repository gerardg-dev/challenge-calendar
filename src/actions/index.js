import { SELECT_DAY, CREATE_REMINDER } from "../constants/ActionTypes";

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
