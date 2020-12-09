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
    showSingleReminder: false
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

  hideAll = () => {
    this.setState({
      ...this.state,
      ...{
        showModal: false,
        showCreateReminderForm: false,
        showReminders: false,
        showSingleReminder: false
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

  render() {
    return (
      <div className="home-page__container">
        {/* moment.js library demo
        {this.props.selectedDay !== null && (
          <div style={{ display: "flex", flexDirection: "row" }}>
            <p>{this.props.selectedDay.format("l")}</p>
            {" - "}
            <p>{this.props.selectedDay.month() + 1}</p>
            {" / "}
            <p>{this.props.selectedDay.get("date")}</p>
            {" / "}
            <p>{this.props.selectedDay.year()}</p>
            {" - "}
            <p>{moment().hour()}</p>
            {":"}
            <p>{moment().minute()}</p>
          </div>
        )}
        */}
        <Calendar
          value={this.state.calendarValue}
          onChange={value => {
            this.setState({ calendarValue: value });
            this.props.selectDay(value);
            // console.log(this.props.state);
          }}
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
                  // console.log("onLookupReminder - Reminder Date and ID");
                  // console.log(date);
                  // console.log(id);
                  await this.props.setActiveReminder({ date, id });
                  const activeReminderObj = await this.getActiveReminderObj();
                  this.props.getWeather({
                    cityName: activeReminderObj.city
                  });
                  this.toggleShowSingleReminder();
                }}
                onUpdateReminder={(date, id) => {
                  // console.log("onUpdateReminder - Reminder Date and ID");
                  // console.log(date);
                  // console.log(id);
                  this.props.setActiveReminder({ date, id });
                }}
                onDeleteReminder={(date, id) => {
                  // console.log("onDeleteReminder - Reminder Date and ID");
                  // console.log(date);
                  // console.log(id);
                  this.props.setActiveReminder({ date, id });
                }}
              />
            )}
            {this.state.showCreateReminderForm && (
              <ReminderForm
                formTitle="CREATE REMINDER"
                day={this.props.selectedDay.get("date")}
                month={this.props.selectedDay.month() + 1}
                year={this.props.selectedDay.year()}
                // hour="11"
                // minute="11"
                // textarea="Love is in the air"
                // city="Paris"
                // state="Paris"
                // zipcode=""
                // country="France"
                // color="pink"
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
        {this.state.showSingleReminder && this.props.activeReminder !== null && (
          <SingleReminder
            isLoadingWeather={this.props.isLoadingWeather}
            loadingWeatherError={this.props.setWeatherError}
            // isLoadingWeather={true}
            reminderObj={this.getActiveReminderObj()}
            sevenDayForecast={this.props.activeReminderWeather}
            onClose={() => this.toggleShowSingleReminder()}
          />
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
