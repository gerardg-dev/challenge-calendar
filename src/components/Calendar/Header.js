import "../../styles/main.scss";

const Header = ({
  onChange,
  currMonthName,
  currYear,
  prevMonth,
  nextMonth
}) => {
  return (
    <div className="calendar-component__header">
      <div onClick={() => onChange(prevMonth())}>
        {String.fromCharCode(171)}
      </div>
      <div>
        {currMonthName()} {currYear()}
      </div>
      <div onClick={() => onChange(nextMonth())}>
        {String.fromCharCode(187)}
      </div>
    </div>
  );
};

export default Header;
