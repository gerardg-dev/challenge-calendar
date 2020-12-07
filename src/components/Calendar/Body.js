const Body = ({ onChange, calendar, dayStyles, value }) => {
  return (
    <div>
      {calendar.map((week, weekIndex) => (
        <div key={weekIndex} style={{ color: "gray", fontSize: "18px" }}>
          {week.map((day, dayIndex) => (
            <div
              key={dayIndex}
              style={{
                border: "solid 1px lightGray",
                position: "relative",
                width: "calc(100% / 7)",
                height: "80px",
                display: "inline-block",
                backgroundColor: "white",
                padding: 0,
                margin: 0,
                boxSizing: "border-box",
                zIndex: 1,
                textAlign: "center",
                color: "gray"
              }}
              onClick={() => {
                onChange(day);
              }}
            >
              <div style={dayStyles(day, value)}>
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
