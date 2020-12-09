import "../styles/main.scss";

const SingleReminder = ({ reminderObj, onClose }) => {
  if (reminderObj === undefined || reminderObj === null) {
    return null;
  }

  return (
    <div className="single-reminder-component__container">
      <div className="single-reminder-component__container--content">
        <div className="single-reminder-component__container--weather"></div>
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
