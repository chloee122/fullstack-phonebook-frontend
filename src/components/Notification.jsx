import PropTypes from "prop-types";

Notification.propTypes = {
  sucessfulMessage: PropTypes.string,
  errorMessage: PropTypes.string,
};

function Notification({ sucessfulMessage, errorMessage }) {
  if (sucessfulMessage) {
    return <div className="noti">{sucessfulMessage}</div>;
  } else if (errorMessage) {
    return <div className="error">{errorMessage}</div>;
  } else {
    return null;
  }
}

export default Notification;
