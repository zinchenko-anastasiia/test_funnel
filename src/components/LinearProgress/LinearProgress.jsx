import React from "react";
import PropTypes from "prop-types";

const LinearProgress = (props) => {
  const { completed, completedText } = props;

  return (
    <div className="linear-progress-container r">
      <div
        className="linear-progress-filler"
        style={{ width: `${completed}%` }}
      >
        {completedText && (
          <span className="linear-progress-label">{`${completed}%`}</span>
        )}
      </div>
    </div>
  );
};

LinearProgress.propTypes = {
  completed: PropTypes.number.isRequired,
  completedText: PropTypes.string
};

export default LinearProgress;
