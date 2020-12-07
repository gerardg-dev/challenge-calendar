import { SELECT_DAY } from "../constants/ActionTypes";

export const selectDay = day => {
  return {
    type: SELECT_DAY,
    payload: day
  };
};
