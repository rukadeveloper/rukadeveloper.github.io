import React from "react";

const MobileSliderInfo = ({ sliderImg }) => {
  return (
    <div className="mobile__slider__info">
      <span>{sliderImg.data}</span>
      <b>{sliderImg.details}</b>
    </div>
  );
};

export default MobileSliderInfo;
