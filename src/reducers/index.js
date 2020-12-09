import {
  SELECT_DAY,
  CREATE_REMINDER,
  SET_ACTIVE_REMINDER,
  SET_WEATHER,
  SET_WEATHER_ERROR,
  IS_LOADING_WEATHER
} from "../constants/ActionTypes";

const initialState = {
  selectedDay: null,
  remindersData: {},
  activeReminder: null,
  activeReminderWeather: null,
  setWeatherError: null,
  isLoadingWeather: false
};

export default function remindersReducer(state = initialState, action) {
  switch (action.type) {
    case SELECT_DAY: {
      return {
        ...state,
        selectedDay: action.payload
      };
    }
    case CREATE_REMINDER: {
      return {
        ...state,
        remindersData: action.payload
      };
    }
    case SET_ACTIVE_REMINDER: {
      return {
        ...state,
        activeReminder: action.payload
      };
    }
    case SET_WEATHER: {
      return {
        ...state,
        activeReminderWeather: action.payload
      };
    }
    case SET_WEATHER_ERROR: {
      return {
        ...state,
        setWeatherError: action.payload
      };
    }
    case IS_LOADING_WEATHER: {
      return {
        ...state,
        isLoadingWeather: action.payload
      };
    }
    default:
      return state;
  }
}
