const Header = ({
  onChange,
  currMonthName,
  currYear,
  prevMonth,
  nextMonth
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "gray",
        height: "50px",
        color: "white",
        fontSize: "22px",
        fontWeight: "bold",
        textTransform: "uppercase"
      }}
    >
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
