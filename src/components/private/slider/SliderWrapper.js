import React, { useState, useRef, forwardRef } from "react";

import styled from "styled-components";

import { sliderImages } from "../../../mocks/sliderScript";
import SliderPages from "./SliderPages";
import SliderButtons from "./SliderButtons";

import useInfiniteSlider from "../../../hooks/useInfiniteSlider";

const SliderWrap = styled.div`
  width: 600px;
  height: calc(100vh - 90px);
  position: relative;
  overflow: hidden;
  #sliderWrapper {
    width: 100%;
    height: 100%;
    display: flex;
    .slider-slide {
      flex-shrink: 0;
      width: 600px;
      height: 100%;
      a {
        display: block;
        height: 100%;
        position: relative;
        #slider-image {
          width: 100%;
          height: 100%;
          position: relative;
          &::after {
            content: "";
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background-color: rgba(0, 0, 0, 0.2);
          }
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
        .slider-text {
          position: absolute;
          z-index: 20;
          bottom: 0;
          left: 0;
          padding-left: 3.5rem;
          padding-bottom: 5rem;
          > h2 {
            color: #fff;
            font-size: 2.5rem;
          }
          > p {
            color: #fff;
            font-size: 1.2rem;
            margin-top: 1rem;
          }
        }
      }
    }
  }
  #slider-buttons {
    position: absolute;
    bottom: 0;
    right: 0;
    display: flex;
    .slider-icons {
      width: 60px;
      height: 60px;
      cursor: pointer;
      background-color: #fff;
      border: 1px solid rgba(0, 0, 0, 0.65);
      &:not(:nth-child(1)) {
        margin-left: -1px;
      }
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  @media screen and (max-width: 1210px) {
    &#slider {
      width: 400px;
      #sliderWrapper {
        .slider-slide {
          width: 400px;
          a {
            .slider-text {
              padding-left: 2.5rem;
              > h2 {
                font-size: 1.8rem;
              }
              > p {
                font-size: 1.1rem;
              }
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 700px) {
    &#slider {
      width: 100%;
      #sliderWrapper {
        .slider-slide {
          width: 100%;
          height: auto;
        }
      }
    }
  }

  @media screen and (max-width: 600px) {
    &#slider {
      #slider-buttons {
        .slider-icons {
          width: 46px;
          height: 46px;
          svg {
            width: 1.4rem;
            height: 1.4rem;
          }
        }
      }
    }
  }

  @media screen and (max-width: 450px) {
    &#slider {
      #sliderWrapper {
        .slider-slide {
          a {
            .slider-text {
              padding-left: 1.1rem;
              > h2 {
                font-size: 1.4rem;
              }
              > p {
                font-size: 1.1rem;
              }
            }
          }
        }
      }
    }
  }
`;

const SliderWrapper = forwardRef((props, ref) => {
  const [sliderStop, setSliderStop] = useState(false);

  const sliderRef = useRef(null);

  const nextButton = () => {
    if (sliderRef.current && sliderRef.current.children.length > 0) {
      const array = Array.from(sliderRef.current.children);
      array.forEach((el, idx) => {
        el.style.transform = "translateX(-100%)";
        el.style.transition = "transform 1s ease-in-out";
      });

      setTimeout(() => {
        sliderRef.current.appendChild(sliderRef.current.children[0]);

        array.forEach((el, idx) => {
          el.style.transform = "translateX(0)";
          el.style.transition = "none";
        });
      }, 1000);
    }
  };

  const prevButton = () => {
    if (sliderRef.current && sliderRef.current.children.length > 0) {
      const array = Array.from(sliderRef.current.children);

      sliderRef.current.insertBefore(
        sliderRef.current.children[array.length - 1],
        sliderRef.current.children[0]
      );

      sliderRef.current.style.transform = "translateX(-100%)";
      sliderRef.current.style.transition = "none";

      setTimeout(() => {
        sliderRef.current.style.transform = "translateX(0)";
        sliderRef.current.style.transition = "1s ease-in-out";
      }, 0);
    }
  };

  useInfiniteSlider(sliderRef, sliderStop, 1920, 0);

  return (
    <SliderWrap id="slider" ref={ref}>
      <div id="sliderWrapper" ref={sliderRef}>
        {sliderImages.map((images, i) => (
          <SliderPages images={images} key={i} />
        ))}
      </div>
      <SliderButtons
        setSliderStop={setSliderStop}
        nextButton={nextButton}
        prevButton={prevButton}
      />
    </SliderWrap>
  );
});

export default SliderWrapper;
