import React from "react";
import PropTypes from "prop-types";

const Modal = ({ open, children }) => {
  if (open) {
    return (
      <div className="modal-container">
        <div className="modal-body">{children}</div>
      </div>
    );
  }

  return null;
};
Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  children: PropTypes.node
};

export default Modal;
