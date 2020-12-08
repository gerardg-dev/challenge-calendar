import React from "react";
import moment from "moment";
import { connect } from "react-redux";

import Calendar from "../components/Calendar/index.js";
import ReminderForm from "../components/ReminderForm.js";

import { selectDay } from "../actions";

import "../styles/main.scss";

class AppContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    calendarValue: moment()
  };

  componentDidMount() {}

  render() {
    return (
      <div>
        <p>{this.props.selectedDay}</p>
        <Calendar
          value={this.state.calendarValue}
          onChange={value => {
            this.setState({ calendarValue: value });
            this.props.selectDay(value.format("L"));
            // console.log(this.props.state);
          }}
        />
        <ReminderForm
          formTitle="CREATE REMINDER"
          // day="14"
          // month="2"
          // year="2021"
          // hour="11"
          // minute="11"
          // textarea="Love is in the air"
          // city="Paris"
          // state="Paris"
          // zipcode=""
          // country="France"
          // color="pink"
          onReturnFormData={formData => {
            alert(JSON.stringify(formData, null, 4));
          }}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { selectedDay } = state;
  return { selectedDay, state };
};

export default connect(
  mapStateToProps,
  {
    selectDay
  }
)(AppContainer);
