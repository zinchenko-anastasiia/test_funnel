import React from "react";
import PropTypes from "prop-types";
import IconButton from "../IconButton/IconButton";
import LinearProgress from "../LinearProgress/LinearProgress";
import Stack from "../Stack";
import RightHolder from "../../assets/right_holder.svg";
import { useNavigate } from "react-router-dom";

const ProgressNavigation = ({ progressData }) => {
  const navigate = useNavigate();

  return (
    <Stack
      height="4rem"
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      <IconButton onClick={() => navigate(-1)}>
        <img src={RightHolder} alt="right holder" className="right-holder" />
      </IconButton>
      {progressData.map((item, idx) => (
        <LinearProgress key={idx} completed={item.completed} />
      ))}
    </Stack>
  );
};
ProgressNavigation.propTypes = {
  progressData: PropTypes.arrayOf(
    PropTypes.shape({
      completed: PropTypes.number.isRequired
    })
  ).isRequired
};

export default ProgressNavigation;
