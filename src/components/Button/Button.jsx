import React from "react";
import PropTypes from "prop-types";

const Button = ({ children, disabled = false, onClick }) => {
  return (
    <button className="btn" disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired
};

export default Button;
