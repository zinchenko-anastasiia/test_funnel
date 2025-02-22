import React from "react";
import PropTypes from "prop-types";

const IconButton = ({ children, onClick }) => {
  return (
    <button
      style={{
        backgroundColor: "transparent",
        border: "none",
        padding: "0",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        height: "4rem",
        width: "4rem"
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

IconButton.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func.isRequired
};

export default IconButton;
