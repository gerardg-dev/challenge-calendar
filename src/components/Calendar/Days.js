const Days = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "lightBlue",
        height: "40px",
        color: "white",
        fontSize: "18px",
        fontWeight: "bold",
        textTransform: "uppercase"
      }}
    >
      {["S", "M", "T", "W", "T", "F", "S"].map((d, index) => (
        <div key={index}>{d}</div>
      ))}
    </div>
  );
};

export default Days;
