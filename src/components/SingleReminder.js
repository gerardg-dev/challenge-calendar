import "../styles/main.scss";
import moment from "moment";

import CircularProgress from "@material-ui/core/CircularProgress";

const SingleReminder = ({
  isLoadingWeather,
  loadingWeatherError,
  reminderObj,
  sevenDayForecast,
  onClose
}) => {
  if (reminderObj === undefined || reminderObj === null) {
    return null;
  }

  let reminderForecast = "";
  if (
    sevenDayForecast === undefined ||
    sevenDayForecast === null ||
    sevenDayForecast.length === 0
  ) {
    reminderForecast = "Forcast not available for this day";
  }

  const getDaysDiff = () => {
    let todayYear = moment().year();
    let todayMonth = moment().month() + 1;
    let todayDayNum = moment().get("date");

    let reminderYear = reminderObj.year;
    let reminderMonth = reminderObj.month;
    let reminderDayNum = reminderObj.day;

    console.log(todayYear);
    console.log(todayMonth);
    console.log(todayDayNum);

    console.log(reminderYear);
    console.log(reminderMonth);
    console.log(reminderDayNum);

    let a = moment([
      parseInt(reminderYear),
      parseInt(reminderMonth),
      parseInt(reminderDayNum)
    ]);
    let b = moment([
      parseInt(todayYear),
      parseInt(todayMonth),
      parseInt(todayDayNum)
    ]);
    console.log(a.diff(b, "days"));
  };
  console.log("Days Diff");
  console.log(getDaysDiff);

  return (
    <div className="single-reminder-component__container">
      <div className="single-reminder-component__container--content">
        <div className="single-reminder-component__container--weather">
          {isLoadingWeather && <CircularProgress color="white" />}
          {loadingWeatherError !== null && (
            <div>
              Oops, something happened! check your internet connection and try
              again later or send an email to the developer
              gerardg.dev@gmail.com
            </div>
          )}
          {isLoadingWeather === false && loadingWeatherError === null && (
            <div>{reminderObj.city}</div>
          )}
          <div>{reminderForecast}</div>
        </div>
        <div
          className="single-reminder-component__container--reminder"
          style={{ backgroundColor: `${reminderObj.color}` }}
        >
          <div>{reminderObj.date}</div>
          <div>
            {reminderObj.hour} : {reminderObj.minute} {" HRS"}
          </div>
          <div>{reminderObj.textarea}</div>
        </div>

        <div className="modal-component__container--close" onClick={onClose}>
          CLOSE
        </div>
      </div>
    </div>
  );
};

export default SingleReminder;

SingleReminder.defaultProps = {
  onClose: () => console.log("onClose SingleReminder!")
};
