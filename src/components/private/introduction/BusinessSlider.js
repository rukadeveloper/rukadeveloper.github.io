import React, { useState, useRef } from "react";
import { businessMocks } from "../../../mocks/businessScript";
import BusinessEach from "./BusinessEach";
import BusinessButton from "./BusinessButton";
import useClickedSlider from "../../../hooks/useClickedSlider";

const BusinessSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const wrapperRef = useRef(null);

  const slider = useClickedSlider(setActiveIndex, activeIndex, wrapperRef, 700);

  return (
    <div className="b-slider">
      <div className="b-slider-inner">
        <div className="b-slider-wrapper" ref={wrapperRef}>
          {businessMocks.map((business) => (
            <BusinessEach business={business} />
          ))}
        </div>
        <BusinessButton
          activeIndex={activeIndex}
          businessMocks={businessMocks}
          prev={slider.prev}
          next={slider.next}
        />
      </div>
    </div>
  );
};

export default BusinessSlider;
