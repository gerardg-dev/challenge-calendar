import "../../styles/main.scss";

const Body = ({ onChange, calendar, dayStyles, value }) => {
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
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Body;
