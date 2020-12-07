import { SELECT_DAY } from "../constants/ActionTypes";

const initialState = {
  selectedDay: null
};

export default function remindersReducer(state = initialState, action) {
  switch (action.type) {
    case SELECT_DAY: {
      return {
        ...state,
        selectedDay: action.payload
      };
    }
    default:
      return state;
  }
}
