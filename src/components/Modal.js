import "../styles/main.scss";

const Modal = ({ children, onClose }) => {
  return (
    <div className="modal-component__container">
      <div className="modal-component__container--content">{children}</div>
      <div className="modal-component__container--close" onClick={onClose}>
        CLOSE
      </div>
    </div>
  );
};

export default Modal;
