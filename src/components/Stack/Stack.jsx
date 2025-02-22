import React from "react";
import PropTypes from "prop-types";

const Stack = ({
  direction = "column",
  gap = "1rem",
  justifyContent = "flex-start",
  alignItems = "flex-start",
  height = "auto",
  textAlign = "center",
  children
}) => {
  const style = {
    display: "flex",
    flexDirection: direction,
    gap: gap,
    justifyContent: justifyContent,
    alignItems: alignItems,
    height: height,
    textAlign: textAlign
  };

  return <div style={style}>{children}</div>;
};
Stack.propTypes = {
  direction: PropTypes.string,
  gap: PropTypes.string,
  justifyContent: PropTypes.string,
  alignItems: PropTypes.string,
  children: PropTypes.node,
  height: PropTypes.string,
  textAlign: PropTypes.string
};

export default Stack;
