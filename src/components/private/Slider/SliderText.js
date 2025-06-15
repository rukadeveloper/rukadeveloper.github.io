import React from "react";

const SliderText = ({ label, details }) => {
  return (
    <div className="slider-text">
      <h2>{label}</h2>
      <p>{details}</p>
    </div>
  );
};

export default SliderText;
