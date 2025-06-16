import React from "react";
import ProductImageBox from "./ProductImageBox";
import { Link } from "react-router-dom";

const ProductBox = ({ product }) => {
  return (
    <div className="product-box">
      <Link to="/">
        <ProductImageBox productImage={product.productImage} />
        <h2>{product.productName}</h2>
        <span>
          {product.sale
            ? Math.floor(
                (product.originalPrice * (100 - product.salePercent)) / 100
              ).toLocaleString()
            : product.originalPrice.toLocaleString()}{" "}
          원
        </span>
      </Link>
    </div>
  );
};

export default ProductBox;
