import React from "react";
import SwiperImageBox from "./SwiperImageBox";

const ProductsSwiper = ({ stores }) => {
  return (
    <div className="products-content-slide">
      <SwiperImageBox img={stores.productImage} />
      <h2>{stores.productName}</h2>
      <span className={`original ${stores.sale ? "decoration" : ""}`}>
        {(stores.originalPrice * 1000).toLocaleString()}
      </span>
      <div className="sale" style={{ display: !stores.sale ? "none" : "flex" }}>
        <span className="salePercent">{stores.salePercent}%</span>
        <span className="saled">
          {Math.floor(
            (stores.originalPrice * 1000 * (100 - stores.salePercent)) / 100
          ).toLocaleString()}
        </span>
      </div>
    </div>
  );
};

export default ProductsSwiper;
