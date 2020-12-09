import "../../styles/main.scss";

const Days = () => {
  return (
    <div className="calendar-component__days-letter">
      {["S", "M", "T", "W", "T", "F", "S"].map((d, index) => (
        <div key={index}>{d}</div>
      ))}
    </div>
  );
};

export default Days;
