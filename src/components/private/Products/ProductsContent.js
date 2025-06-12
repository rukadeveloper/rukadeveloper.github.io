import React, { useState, useEffect, useRef } from "react";
import ProductsSwiper from "./ProductsSwiper";
import SwiperBar from "./SwiperBar";
import { productMocks } from "../../../mocks/productScript";

const ProductsContent = () => {
  const [store, setStore] = useState([]);
  const sliderRef = useRef(null);

  useEffect(() => {
    const fetchStore = async () => {
      const response = await fetch("http://localhost:8080/api/products");
      const json = await response.json();
      setStore(json.data);
    };

    fetchStore();
  }, []);

  return (
    <div className="products-content">
      <div className="products-content-swiper">
        <div className="products-content-swiper-wrapper" ref={sliderRef}>
          {productMocks.data.map((stores) => (
            <ProductsSwiper stores={stores} key={stores.id} />
          ))}
        </div>
        <SwiperBar ref={sliderRef} />
      </div>
    </div>
  );
};

export default ProductsContent;
