import React from "react";
import Info from "./Info";
import MoveButton from "./MoveButton";

const DetailInfo = ({ activeIndex, sliderImages }) => {
  return (
    <div className="detail__info">
      <Info info={sliderImages[activeIndex]} />
      <MoveButton slider={sliderImages[activeIndex]} />
    </div>
  );
};

export default DetailInfo;
