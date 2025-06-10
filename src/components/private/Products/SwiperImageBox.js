import React from "react";

const SwiperImageBox = ({ img }) => {
  return (
    <div className="products-imgBox">
      <img src={img} alt="product_image" />
      <div className="pack-box">
        <span>2</span>
        <span>Pack</span>
      </div>
    </div>
  );
};

export default SwiperImageBox;
