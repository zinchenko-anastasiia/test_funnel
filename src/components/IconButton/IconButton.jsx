import React from "react";
import PropTypes from "prop-types";

const IconButton = ({ children }) => {
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
    >
      {children}
    </button>
  );
};

IconButton.propTypes = {
  children: PropTypes.node
};

export default IconButton;
