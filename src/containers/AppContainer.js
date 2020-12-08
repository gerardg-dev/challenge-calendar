import React from "react";
import { connect } from "react-redux";

import moment from "moment";
import { v4 as uuidv4 } from "uuid";

import Calendar from "../components/Calendar/index.js";
import ReminderForm from "../components/ReminderForm";
import Modal from "../components/Modal";

import { selectDay, createReminder } from "../actions";

import "../styles/main.scss";

class AppContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    calendarValue: moment(),
    showModal: false,
    showCreateReminderForm: false
  };

  componentDidMount() {
    this.props.selectDay(this.state.calendarValue);
  }

  toggleShouldShowModal = () => {
    this.setState({
      showModal: this.state.showModal === true ? false : true
    });
  };

  toggleShouldShowReminderForm = () => {
    this.setState({
      showCreateReminderForm:
        this.state.showCreateReminderForm === true ? false : true
    });
  };

  hideAll = () => {
    this.setState({
      ...this.state,
      ...{
        showModal: false,
        showCreateReminderForm: false
      }
    });
  };

  render() {
    return (
      <div className="home-page__container">
        {/* moment.js library demo */}
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
        <Calendar
          value={this.state.calendarValue}
          onChange={value => {
            this.setState({ calendarValue: value });
            this.props.selectDay(value);
            // console.log(this.props.state);
          }}
        />
        <div
          className="btn-1-component__container"
          onClick={() => {
            this.toggleShouldShowModal();
            this.toggleShouldShowReminderForm();
          }}
        >
          CREATE REMINDER
        </div>
        {this.state.showModal && (
          <Modal onClose={() => this.hideAll()}>
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
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { selectedDay, remindersData } = state;
  return { selectedDay, remindersData, state };
};

export default connect(
  mapStateToProps,
  {
    selectDay,
    createReminder
  }
)(AppContainer);
