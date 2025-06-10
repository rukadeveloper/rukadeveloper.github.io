import React, { useState, useEffect, useRef } from "react";

import EachImage from "./EachImage";

const ImageSlide = ({ activeIndex, sliderImages }) => {
  const slideAll = useRef();
  const [slideAllLength, setSlideAllLength] = useState(null);

  useEffect(() => {
    const updateWidth = () => {
      if (slideAll.current) {
        setSlideAllLength(slideAll.current.getBoundingClientRect().width);
      }
    };

    updateWidth();

    window.addEventListener("resize", updateWidth);

    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  return (
    <div className="image__slide" ref={slideAll}>
      {sliderImages.map((slide, i) => (
        <EachImage
          slide={slide}
          slideAllLength={slideAllLength}
          index={i}
          key={i}
          activeIndex={activeIndex}
        />
      ))}
    </div>
  );
};

export default ImageSlide;
