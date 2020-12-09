import {
  SELECT_DAY,
  CREATE_REMINDER,
  SET_ACTIVE_REMINDER,
  SET_WEATHER,
  SET_WEATHER_ERROR,
  IS_LOADING_WEATHER
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
