import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Select = ({ options, onChange, button = false }) => {
  return (
    <div className="select-group">
      {options.map((option) => (
        <label
          key={option.id}
          className={classNames("select", {
            "select-active": option.selected,
            "select-inactive": !option.selected,
            button: button
          })}
          onClick={() => onChange(option.id)}
        >
          <input
            type="checkbox"
            name="options"
            autoComplete="off"
            checked={option.selected}
            onChange={() => onChange(option.id)}
          />
          {option.label}
        </label>
      ))}
    </div>
  );
};

Select.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      selected: PropTypes.bool.isRequired
    })
  ).isRequired,
  onChange: PropTypes.func.isRequired,
  button: PropTypes.bool
};

export default Select;
