import React, { useRef } from "react";
import { productMocks } from "../../../mocks/productScript";
import ProductBox from "./ProductBox";
import useInfiniteSlider from "../../../hooks/useInfiniteSlider";

const ProductSlide = () => {
  const productSlideRef = useRef(null);
  const stop = false;

  useInfiniteSlider(productSlideRef, stop, 810, 700);

  return (
    <div className="product-slide" ref={productSlideRef}>
      {productMocks.data.map((product, i) => (
        <ProductBox product={product} key={i} />
      ))}
    </div>
  );
};

export default ProductSlide;
