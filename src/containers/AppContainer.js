import React from "react";
import moment from "moment";
import { connect } from "react-redux";

import Calendar from "../components/Calendar/index.js";

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
        <Calendar
          value={this.state.calendarValue}
          onChange={value => {
            this.setState({ calendarValue: value });
            this.props.selectDay(value.format("L"));
            console.log(this.props.state);
          }}
        />
        <p>{this.props.selectedDay}</p>
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
