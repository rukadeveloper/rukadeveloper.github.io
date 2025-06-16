import React, { useEffect, useRef } from "react";

import styled from "styled-components";
import SliderWrapper from "../slider/SliderWrapper";
import ProductWrapper from "../products/ProductWrapper";
import useFixedScroll from "../../../hooks/useFixedScroll";

const Split = styled.div`
  &#split-wrapper {
    margin-top: 90px;
    width: 100%;
    height: calc(100vh - 90px);
    display: flex;
    &.end {
      justify-content: end;
    }
  }

  @media screen and (max-width: 700px) {
    &#split-wrapper {
      flex-direction: column;
      height: auto;
    }
  }
`;

const SplitWrapper = () => {
  const slideRef = useRef(null);
  const productRef = useRef(null);
  const extendRef = useRef(null);

  useFixedScroll(slideRef, productRef, 810);

  useEffect(() => {
    if (extendRef.current) {
      const resizeHeight = () => {
        if (window.innerWidth >= 810 + 15) {
          extendRef.current.style.height = `${
            productRef.current.getBoundingClientRect().height
          }px`;
        } else {
          extendRef.current.style.height = "auto";
        }
      };

      resizeHeight();

      window.addEventListener("resize", resizeHeight);

      return () => {
        window.removeEventListener("resize", resizeHeight);
      };
    }
  }, []);

  return (
    <Split id="split-wrapper" ref={extendRef}>
      <SliderWrapper ref={slideRef} />
      <ProductWrapper ref={productRef} />
    </Split>
  );
};

export default SplitWrapper;
