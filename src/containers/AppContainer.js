import React from "react";
import { connect } from "react-redux";

import moment from "moment";
import { v4 as uuidv4 } from "uuid";

import Calendar from "../components/Calendar/index.js";
import ReminderForm from "../components/ReminderForm";
import Reminders from "../components/Reminders";
import SingleReminder from "../components/SingleReminder";
import Modal from "../components/Modal";

import { selectDay, createReminder, setActiveReminder } from "../actions";

import { getWeather } from "../thunks/Weather";

import { removeObjectbyKeyNameAndValue } from "../util/arrHelpers";

import "../styles/main.scss";

class AppContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    calendarValue: moment(),
    showModal: false,
    showCreateReminderForm: false,
    showReminders: false,
    showSingleReminder: false,
    showUpdateReminder: false
  };

  async componentDidMount() {
    await this.props.selectDay(moment());
  }

  toggleShowModal = () => {
    this.setState({
      showModal: this.state.showModal === true ? false : true
    });
  };

  toggleShowReminderForm = () => {
    this.setState({
      showCreateReminderForm:
        this.state.showCreateReminderForm === true ? false : true
    });
  };

  toggleShowReminders = () => {
    this.setState({
      showReminders: this.state.showReminders === true ? false : true
    });
  };

  toggleShowSingleReminder = () => {
    this.setState({
      showSingleReminder: this.state.showSingleReminder === true ? false : true
    });
  };

  toggleShowUpdateReminder = () => {
    this.setState({
      showUpdateReminder: this.state.showUpdateReminder === true ? false : true
    });
  };

  hideAll = () => {
    this.setState({
      ...this.state,
      ...{
        showModal: false,
        showCreateReminderForm: false,
        showReminders: false,
        showSingleReminder: false,
        showUpdateReminder: false
      }
    });
  };

  getActiveReminderObj = () => {
    if (
      this.props.activeReminder === undefined ||
      this.props.activeReminder === null
    ) {
      return null;
    }

    const { date, id } = this.props.activeReminder;

    if (this.props.remindersData[date] === undefined) {
      return null;
    }

    const dateReminders = this.props.remindersData[date];

    let obj = dateReminders.find(o => o.id.toString() === id.toString());

    return obj;
  };

  deleteReminder = async (date, id) => {
    let remindersData = this.props.remindersData;
    let allRemindersForThisDate = remindersData[date];

    const dateRemindersAfterRemovedReminder = removeObjectbyKeyNameAndValue(
      allRemindersForThisDate,
      "id",
      id
    );

    await this.props.createReminder({
      ...remindersData,
      ...{
        [date]: [...dateRemindersAfterRemovedReminder]
      }
    });
  };

  render() {
    return (
      <div className="home-page__container">
        <Calendar
          value={this.state.calendarValue}
          onChange={value => {
            this.setState({ calendarValue: value });
            this.props.selectDay(value);
            // console.log(this.props.state);
          }}
          remindersData={this.props.remindersData}
        />
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div
            className="btn-1-component__container"
            onClick={() => {
              this.toggleShowModal();
              this.toggleShowReminders();
            }}
          >
            REMINDERS FOR {this.state.calendarValue.format("l")}
          </div>
          <div style={{ width: "10px" }} />
          <div
            className="btn-1-component__container"
            onClick={() => {
              this.toggleShowModal();
              this.toggleShowReminderForm();
            }}
          >
            CREATE REMINDER
          </div>
        </div>
        {this.state.showModal && (
          <Modal onClose={() => this.hideAll()}>
            {this.state.showReminders && (
              <Reminders
                date={this.state.calendarValue.format("l")}
                remindersData={
                  this.props.remindersData[this.state.calendarValue.format("l")]
                }
                onSelectReminder={() => console.log("reminder chosen")}
                onLookupReminder={async (date, id) => {
                  await this.props.setActiveReminder({ date, id });
                  const activeReminderObj = await this.getActiveReminderObj();
                  this.props.getWeather({
                    cityName: activeReminderObj.city
                  });
                  this.toggleShowSingleReminder();
                }}
                onUpdateReminder={async (date, id) => {
                  await this.props.setActiveReminder({ date, id });
                  this.toggleShowUpdateReminder();
                }}
                onDeleteReminder={async (date, id) => {
                  this.props.setActiveReminder({ date, id });
                  if (
                    window.confirm(
                      "ARE YOU SURE YOU WANT TO DELETE THIS REMINDER?"
                    )
                  ) {
                    this.deleteReminder(date, id);
                  }
                }}
                onDeleteAllReminders={date => {
                  if (
                    window.confirm(
                      "ARE YOU SURE YOU WANT TO DELETE ALL REMINDERS FOR THIS SPECIFIC DATE?"
                    )
                  ) {
                    let remindersData = this.props.remindersData;

                    const notAllowed = [date.toString()];
                    const filtered = Object.keys(remindersData)
                      .filter(key => !notAllowed.includes(key))
                      .reduce((obj, key) => {
                        return {
                          ...obj,
                          [key]: remindersData[key]
                        };
                      }, {});

                    this.props.createReminder({
                      ...filtered
                    });
                  }
                }}
              />
            )}
            {this.state.showCreateReminderForm && (
              <ReminderForm
                formTitle="CREATE REMINDER"
                day={this.props.selectedDay.get("date")}
                month={this.props.selectedDay.month() + 1}
                year={this.props.selectedDay.year()}
                onReturnFormData={formData => {
                  // alert(JSON.stringify(formData, null, 4));

                  const date = `${formData.month}/${formData.day}/${formData.year}`;

                  const reminderObject = {
                    ...{
                      id: uuidv4(),
                      date
                    },
                    ...formData
                  };

                  const remindersData = this.props.remindersData;

                  let remindersForThisDate = {};

                  if (remindersData && remindersData[date]) {
                    // key 'date' already exists in the remindersData object
                    // grab existing data and push new reminder object
                    // key 'date' is an array of objects (reminderObjects)
                    remindersForThisDate = {
                      [date]: [...remindersData[date], ...[reminderObject]]
                    };
                  } else {
                    // key 'date' does not exist in the remindersData object
                    // create new key 'date' and add this object
                    // key 'date' is an array of objects (reminderObjects)
                    remindersForThisDate = {
                      [date]: [...[reminderObject]]
                    };
                  }

                  this.props.createReminder({
                    ...remindersData,
                    ...remindersForThisDate
                  });

                  this.hideAll();
                }}
              />
            )}
          </Modal>
        )}
        {this.state.showSingleReminder &&
          this.props.activeReminder !== null && (
            <SingleReminder
              isLoadingWeather={this.props.isLoadingWeather}
              loadingWeatherError={this.props.setWeatherError}
              reminderObj={this.getActiveReminderObj()}
              sevenDayForecast={this.props.activeReminderWeather}
              onClose={() => this.toggleShowSingleReminder()}
            />
          )}
        {this.state.showUpdateReminder && this.props.activeReminder !== null && (
          <div
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.8)",
              position: "absolute",
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              zIndex: 2000
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <ReminderForm
                formTitle="UPDATE REMINDER"
                day={this.getActiveReminderObj().day}
                month={this.getActiveReminderObj().month}
                year={this.getActiveReminderObj().year}
                hour={this.getActiveReminderObj().hour}
                minute={this.getActiveReminderObj().minute}
                textarea={this.getActiveReminderObj().textarea}
                city={this.getActiveReminderObj().city}
                color={this.getActiveReminderObj().color}
                onReturnFormData={async formData => {
                  const activeReminderObj = await this.getActiveReminderObj();

                  const date = `${formData.month}/${formData.day}/${formData.year}`;

                  const reminderObject = {
                    ...{
                      id: activeReminderObj.id,
                      date
                    },
                    ...formData
                  };

                  const remindersData = this.props.remindersData;

                  let remindersForThisDate = {};

                  if (remindersData && remindersData[date]) {
                    // key 'date' already exists in the remindersData object
                    // grab existing data and push new reminder object
                    // key 'date' is an array of objects (reminderObjects)
                    remindersForThisDate = {
                      [date]: [...remindersData[date], ...[reminderObject]]
                    };
                  } else {
                    // key 'date' does not exist in the remindersData object
                    // create new key 'date' and add this object
                    // key 'date' is an array of objects (reminderObjects)
                    remindersForThisDate = {
                      [date]: [...[reminderObject]]
                    };
                  }

                  this.props.createReminder({
                    ...remindersData,
                    ...remindersForThisDate
                  });

                  this.hideAll();

                  this.deleteReminder(
                    activeReminderObj.date,
                    activeReminderObj.id
                  );
                }}
              />
              <div
                style={{
                  color: "white",
                  backgroundColor: "red",
                  width: "100%",
                  height: "40px"
                }}
                onClick={() => this.toggleShowUpdateReminder()}
              >
                CLOSE
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const {
    selectedDay,
    remindersData,
    activeReminder,
    activeReminderWeather,
    setWeatherError,
    isLoadingWeather
  } = state;
  return {
    selectedDay,
    remindersData,
    activeReminder,
    activeReminderWeather,
    setWeatherError,
    isLoadingWeather,
    state
  };
};

export default connect(
  mapStateToProps,
  {
    selectDay,
    createReminder,
    setActiveReminder,
    //
    getWeather
  }
)(AppContainer);
