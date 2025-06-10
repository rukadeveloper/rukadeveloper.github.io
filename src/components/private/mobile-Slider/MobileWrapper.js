import React, { forwardRef } from "react";

const MobileWrapper = forwardRef(({ children }, ref) => {
  return (
    <div className="mobile__wrapper" ref={ref}>
      {children}
    </div>
  );
});

export default MobileWrapper;
