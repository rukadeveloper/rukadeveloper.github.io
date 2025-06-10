import React, { useEffect, useState } from "react";
import "./slider.css";
import { sliderImages } from "../../../mocks/sliderScript";
import ImageSlide from "./ImageSlide";
import SlideBullet from "./SlideBullet";
import DetailInfo from "./DetailInfo";

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const clickBullet = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    const activeIndexChange = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 4);
    }, 6000);

    return () => {
      clearInterval(activeIndexChange);
    };
  }, []);

  return (
    <div id="slider">
      <ImageSlide activeIndex={activeIndex} sliderImages={sliderImages} />
      <SlideBullet
        activeIndex={activeIndex}
        sliderImages={sliderImages}
        clickBullet={clickBullet}
      />
      <DetailInfo activeIndex={activeIndex} sliderImages={sliderImages} />
    </div>
  );
};

export default Slider;
