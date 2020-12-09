import "../../styles/main.scss";
import ListIcon from "@material-ui/icons/List";

const Body = ({ onChange, calendar, dayStyles, value, remindersData }) => {
  return (
    <div className="calendar-component__body">
      {calendar.map((week, weekIndex) => (
        <div key={weekIndex} className="calendar-component__week-box">
          {week.map((day, dayIndex) => (
            <div
              key={dayIndex}
              className="calendar-component__day-box"
              onClick={() => {
                onChange(day);
              }}
            >
              <div className={dayStyles(day, value)}>
                {day.format("D").toString()}
                <div
                  style={{
                    position: "absolute",
                    left: "50%",
                    transform: "translate(-50%, 0)",
                    backgroundColor: "orange",
                    width: "30px",
                    borderRadius: "1000px"
                  }}
                >
                  {remindersData && remindersData[day.format("l")] && (
                    <ListIcon fontSize="large" />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Body;
