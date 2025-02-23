import React from "react";
import PropTypes from "prop-types";

const Collage = ({ photo }) => {
  const [photoPath1, photoPath2, photoPath3] = photo;

  return (
    <div className="collage">
      <div className="photo left">
        <img src={photoPath1} alt="Center" loading="lazy" />
      </div>
      <div className="photo center">
        <img src={photoPath2} alt="Left" loading="lazy" />
      </div>
      <div className="photo right">
        <img src={photoPath3} alt="Right" loading="lazy" />
      </div>
    </div>
  );
};

Collage.propTypes = {
  photo: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Collage;
