import React from "react";
import PropTypes from "prop-types";

const Button = ({ children, disabled = false }) => {
  return (
    <button className="btn" disabled={disabled}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool
};

export default Button;
