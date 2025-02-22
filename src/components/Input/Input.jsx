import React from "react";
import PropTypes from "prop-types";

const Input = ({ label, value, onChange, type = "text", placeholder }) => {
  return (
    <div className="input-field">
      {label && <label htmlFor={label}>{label}</label>}
      <input
        id={label}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="input"
      />
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string
};

export default Input;
