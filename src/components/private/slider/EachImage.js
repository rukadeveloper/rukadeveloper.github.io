import React, { useEffect, useRef } from "react";

const EachImage = ({ slide, slideAllLength, index, activeIndex }) => {
  const eachRef = useRef();

  useEffect(() => {
    if (eachRef.current) {
      eachRef.current.style.width = slideAllLength / 4 - 1.8 * 3 + "px";
    }
  }, [slideAllLength]);

  return (
    <div
      className={`each__image ${activeIndex === index ? "active" : ""}`}
      ref={eachRef}
    >
      <img src={slide.sliderImage} alt="slider__image" />
      <span>{slide.data}</span>
    </div>
  );
};

export default EachImage;
