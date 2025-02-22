import React from "react";
import UserPhoro from "../../assets/user_photo.jpg";

const Collage = () => {
  return (
    <div className="collage">
      <div className="photo left">
        <img src={UserPhoro} alt="Center" />
      </div>
      <div className="photo center">
        <img src={UserPhoro} alt="Left" />
      </div>
      <div className="photo right">
        <img src={UserPhoro} alt="Right" />
      </div>
    </div>
  );
};

export default Collage;
