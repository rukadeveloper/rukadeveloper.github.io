import React from "react";

const SliderImages = ({ src, alt }) => {
  return (
    <div id="slider-image">
      <img src={src} alt={alt} />
    </div>
  );
};

export default SliderImages;
