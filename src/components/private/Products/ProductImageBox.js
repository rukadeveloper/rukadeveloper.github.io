import React from "react";

const ProductImageBox = ({ productImage }) => {
  return (
    <div className="product-image-box">
      <img src={productImage} alt="products" width={400} />
    </div>
  );
};

export default ProductImageBox;
