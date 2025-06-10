import React, { forwardRef } from "react";
import { lionsProducts } from "../../../../mocks/lionsProductScript";
import SamsungProductSlide from "./SamsungProductSlide";

const SamsungProductList = forwardRef(({ mouseDown }, ref) => {
  return (
    <div className="samsung-product-list">
      <div
        className="samsung-product-list-wrapper"
        ref={ref}
        onMouseDown={mouseDown}
      >
        {lionsProducts.map((lions) => (
          <SamsungProductSlide lions={lions} />
        ))}
      </div>
    </div>
  );
});

export default SamsungProductList;
