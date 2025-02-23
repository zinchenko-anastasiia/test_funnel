import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Stack from "../Stack";

const AgreementOption = ({ label, link, to }) => {
  const content = (
    <Stack gap="0.8rem" alignItems="center">
      <img src={label.img} alt={label.text} />
      <p className="agreement-answear">{label.text}</p>
    </Stack>
  );

  if (link) {
    return (
      <Link to={to} className="agreement-link">
        {content}
      </Link>
    );
  }

  return content;
};
AgreementOption.propTypes = {
  label: PropTypes.shape({
    img: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired,
  link: PropTypes.bool,
  to: PropTypes.string
};

export default AgreementOption;
