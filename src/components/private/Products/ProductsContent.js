import React, { useState, useEffect, useRef } from "react";
import useSlider from "../../../hooks/useSlider";
import useSwipers from "../../../store/swiperStore";
import ProductsSwiper from "./ProductsSwiper";
import SwiperBar from "./SwiperBar";
import productMocks from "../../../mocks/productScript";

const ProductsContent = () => {
  const [store, setStore] = useState([]);
  const [realTemp, setRealTemp] = useState(0);
  const sliderRef = useRef(null);

  useSlider(sliderRef, store);

  const { swipers } = useSwipers();

  useEffect(() => {
    const fetchStore = async () => {
      const response = await fetch("http://localhost:8080/api/products");
      const json = await response.json();
      setStore(json.data);
    };

    fetchStore();
  }, []);

  useEffect(() => {
    const resizeable = () => {
      if (sliderRef.current && sliderRef.current.children.length > 0) {
        if (window.innerWidth >= 845) {
          const temp =
            16 * (Array.from(sliderRef.current.children).length - 4) +
            sliderRef.current.children[0].getBoundingClientRect().width *
              (Array.from(sliderRef.current.children).length - 4);
          setRealTemp(temp);
        }
      }
    };

    resizeable();

    window.addEventListener("resize", resizeable);

    return () => {
      window.removeEventListener("resize", resizeable);
    };
  }, []);

  return (
    <div className="products-content">
      <div className="products-content-swiper">
        <div
          className="products-content-swiper-wrapper"
          ref={sliderRef}
          style={{
            transform: `translateX(-${
              (swipers.barLeft / swipers.max) * realTemp
            }px)`,
          }}
        >
          {store.map((stores) => (
            <ProductsSwiper stores={productMocks.data} key={stores.id} />
          ))}
        </div>
        <SwiperBar ref={sliderRef} />
      </div>
    </div>
  );
};

export default ProductsContent;
