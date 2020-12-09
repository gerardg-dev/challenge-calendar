import { render, screen } from "@testing-library/react";
import App from "./App";
import { CREATE_REMINDER } from "./constants/ActionTypes";
import remindersReducer from "./reducers";

describe("Create Reminder", () => {
  it("remindersData should not be an empty object", () => {
    const reminderObj = {
      "1/1/2021": {
        date: "1/1/2021",
        day: "1",
        month: "1",
        year: "2021",
        hour: "00",
        minute: "00",
        textarea: "Test reminder text",
        city: "London",
        color: "blue"
      }
    };
    const newState = remindersReducer(undefined, {
      type: CREATE_REMINDER,
      payload: reminderObj
    });
    console.log(newState);
    expect(newState.remindersData).toEqual(reminderObj);
  });
});
