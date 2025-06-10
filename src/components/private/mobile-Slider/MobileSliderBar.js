import React, { useEffect } from "react";
import Bar from "./Bar";

const MobileSliderBar = ({ length, mobileIndex, setMobileIndex }) => {
  useEffect(() => {
    const interval = setInterval(() => {
      setMobileIndex((prev) => (prev + 1) % length);
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, [setMobileIndex, length]);

  return (
    <ul className="mobile__slide__bar">
      <span>{mobileIndex + 1}</span>
      <Bar />
      <span>{length}</span>
    </ul>
  );
};

export default MobileSliderBar;
