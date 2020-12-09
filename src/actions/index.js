import {
  SELECT_DAY,
  CREATE_REMINDER,
  SET_ACTIVE_REMINDER,
  SET_WEATHER,
  SET_WEATHER_ERROR,
  IS_LOADING_WEATHER,
  UPDATE_REMINDER,
  DELETE_REMINDER,
  DELETE_ALL_REMINDERS_FOR_SPECIFIC_DAY
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

export const setWeather = weatherObj => {
  return {
    type: SET_WEATHER,
    payload: weatherObj
  };
};

export const setWeatherError = errorObj => {
  return {
    type: SET_WEATHER_ERROR,
    payload: errorObj
  };
};

export const isLoadingWeather = bool => {
  return {
    type: IS_LOADING_WEATHER,
    payload: bool
  };
};

export const updateReminder = payload => {
  return {
    type: UPDATE_REMINDER,
    payload: payload
  };
};
export const deleteReminder = payload => {
  return {
    type: DELETE_REMINDER,
    payload: payload
  };
};
export const deleteAllReminders = payload => {
  return {
    type: DELETE_ALL_REMINDERS_FOR_SPECIFIC_DAY,
    payload: payload
  };
};
