import {
  SELECT_DAY,
  CREATE_REMINDER,
  SET_ACTIVE_REMINDER
} from "../constants/ActionTypes";

const initialState = {
  selectedDay: null,
  remindersData: {},
  activeReminder: null
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
    default:
      return state;
  }
}
