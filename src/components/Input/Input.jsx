import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Input = ({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  error = false,
  ref,
  ...rest
}) => {
  return (
    <div className="input-field">
      {label && <label htmlFor={label}>{label}</label>}
      <input
        id={label}
        ref={ref}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={classNames("input", {
          error: error
        })}
        {...rest}
      />
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  ref: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) })
  ]),
  error: PropTypes.bool
};

export default Input;
