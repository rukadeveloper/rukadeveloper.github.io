import React, { useState, useEffect, useRef } from "react";

import styled from "styled-components";
import { sliderImages } from "../../../mocks/sliderScript";
import MobileEachSlider from "./MobileEachSlider";
import MobileSliderInfo from "./MobileSliderInfo";
import MobileSliderBar from "./MobileSliderBar";
import MobileWrapper from "./MobileWrapper";
import { Link } from "react-router-dom";

const MobileSlide = styled.div`
  display: none;
  width: 100%;
  height: 600px;
  position: relative;
  overflow: hidden;
  .mobile__wrapper {
    display: flex;
    height: 100%;
    transition: transform 0.5s;
    .mobile__each__slider {
      position: relative;
      height: 100%;
      overflow: hidden;
      flex-shrink: 0;
      flex-basis: 100%;
      a {
        display: block;
        &::before {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          background-color: rgba(0, 0, 0, 0.45);
        }
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .mobile__slider__info {
          padding: 0 12.5%;
          position: absolute;
          top: 30%;
          left: 0;
          z-index: 300;
          span {
            font-size: 2.4rem;
            color: white;
            font-weight: 500;
          }
          b {
            display: block;
            font-size: 2rem;
            margin-top: 1rem;
            font-weight: 400;
            color: white;
          }
        }
      }
    }
  }
  .mobile__slide__bar {
    position: absolute;
    padding: 0 12.5%;
    bottom: 30%;
    color: white;
    display: flex;
    gap: 1rem;
    align-items: center;
    .bar {
      width: 100px;
      height: 2px;
      background-color: rgba(255, 255, 255, 0.55);
      position: relative;
      &:after {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        background-color: white;
        animation: bars 3s infinite;
      }
    }
  }
  @media screen and (max-width: 1280px) {
    display: block;
  }
  @media screen and (max-width: 786px) {
    .mobile__wrapper {
      .mobile__each__slider {
        .mobile__slider__info {
          span {
            font-size: 2rem;
          }
          b {
            font-size: 1.5rem;
          }
        }
      }
    }
  }
  @media screen and (max-width: 500px) {
    .mobile__wrapper {
      .mobile__each__slider {
        .mobile__slider__info {
          span {
            font-size: 1.7rem;
          }
          b {
            font-size: 1.2rem;
          }
        }
      }
    }
  }
  @media screen and (max-width: 430px) {
    .mobile__wrapper {
      .mobile__each__slider {
        .mobile__slider__info {
          span {
            font-size: 1.5rem;
          }
          b {
            font-size: 1.05rem;
          }
        }
      }
    }
  }
  @keyframes bars {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }
`;

const MobileSlider = () => {
  const [mobileIndex, setMobileIndex] = useState(0);
  const mobileSlide = useRef(null);
  const mobileEachSlide = useRef(null);

  useEffect(() => {
    if (mobileSlide.current && mobileEachSlide.current) {
      const resizeableSlide = () => {
        mobileSlide.current.style.transform = `translateX(-${
          mobileEachSlide.current.offsetWidth * mobileIndex
        }px)`;
      };

      resizeableSlide();

      window.addEventListener("resize", resizeableSlide);

      return () => {
        window.removeEventListener("resize", resizeableSlide);
      };
    }
  }, [mobileIndex]);

  return (
    <MobileSlide className="mobile__slider">
      <MobileWrapper ref={mobileSlide}>
        {sliderImages.map((img, i) => (
          <MobileEachSlider ref={mobileEachSlide} key={i}>
            <Link to={img.link}>
              <img src={img.sliderImage} alt="slider__img" />
              <MobileSliderInfo sliderImg={img} />
            </Link>
          </MobileEachSlider>
        ))}
      </MobileWrapper>
      <MobileSliderBar
        length={sliderImages.length}
        mobileIndex={mobileIndex}
        setMobileIndex={setMobileIndex}
      />
    </MobileSlide>
  );
};

export default MobileSlider;
