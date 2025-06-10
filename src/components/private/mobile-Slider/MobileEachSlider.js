import React, { forwardRef } from "react";

const MobileEachSlider = forwardRef(({ children }, ref) => {
  return (
    <div className="mobile__each__slider" ref={ref}>
      {children}
    </div>
  );
});

export default MobileEachSlider;
