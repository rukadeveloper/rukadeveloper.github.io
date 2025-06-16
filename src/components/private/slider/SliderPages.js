import React from "react";
import SliderImages from "./SliderImages";
import SliderText from "./SliderText";
import { Link } from "react-router-dom";

const SliderPages = ({ images }) => {
  return (
    <div className="slider-slide">
      <Link to={images.link}>
        <SliderImages src={images.sliderImage} alt={images.alt} />
        <SliderText label={images.label} details={images.details} />
      </Link>
    </div>
  );
};

export default SliderPages;
