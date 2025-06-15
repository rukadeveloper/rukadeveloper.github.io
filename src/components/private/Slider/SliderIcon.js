import React from "react";

const SliderIcon = ({ cpn, setSliderStop, button }) => {
  return (
    <div
      className="slider-icons"
      onMouseOver={() => {
        setSliderStop(true);
      }}
      onMouseLeave={() => {
        setSliderStop(false);
      }}
      onClick={button}
    >
      {cpn}
    </div>
  );
};

export default SliderIcon;
