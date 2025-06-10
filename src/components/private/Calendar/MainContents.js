import React, { useState } from "react";
import useStore from "../../../store/monthStore";
import { groupByMonthAndDay } from "../../../utils/commonFunctions";

import styled from "styled-components";

import DateSwiper from "./DateSwiper";
import ScoreBoard from "./ScoreBoard";
import ThumbnailSlider from "./ThumbnailSlider";
import MobileScoreboard from "../mobile-Scoreboard/MobileScoreboard";

const CalendarMain = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .swiper.date__swiper {
    width: 16rem;
    margin-left: 0;
    margin-right: 0;
    height: 36px;
    padding: 0.5rem 0;
    .swiper-slide {
      font-family: "Poppins" !important;
      font-weight: 600;
      font-size: 18px;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1.5rem;
      position: relative;
      span {
        line-height: 18px;
      }
    }
    .swiper-button-prev {
      width: 8px;
      height: 14px;
      clip-path: polygon(100% 100%, 100% 0, 0 50%);
      background-color: #1b48bb;
      top: 0;
      bottom: 0;
      margin: auto 0;
    }
    .swiper-button-next {
      width: 8px;
      height: 14px;
      clip-path: polygon(0 100%, 100% 50%, 0 0);
      background-color: #1b48bb;
      top: 0;
      bottom: 0;
      margin: auto 0;
    }
  }
  .score__board {
    display: flex;
    flex-direction: column;
    gap: 1.7rem;
    .board__component {
      display: flex;
      gap: 1rem;
      align-items: center;
      &.opacity__down {
        opacity: 0.4;
      }
      .profile {
        width: 45px;
        height: 45px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        background-color: #5d6246;
        position: relative;
        &::before {
          content: "";
          position: absolute;
          width: 60px;
          height: 60px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          border: 1px solid #5d6246;
        }
        img {
          width: 50%;
          height: 50%;
          object-fit: cover;
        }
      }
      span {
        font-size: 18px;
        font-weight: 600;
        width: 40px;
        display: flex;
        justify-content: center;
      }
      .score {
        width: 40px;
        height: 40px;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #5d6246;
        border-radius: 6px;
        span {
          font-size: 18px;
        }
      }
    }
  }
  .mobile__score__board {
    display: none;
    width: 80%;
    margin: 0 auto;
    background-color: #f7f9fa;
    border: 1px solid #f0f0f0;
    border-radius: 10px;
    overflow: hidden;
    order: 2;
    .mobile__title {
      width: 100%;
      display: flex;
      align-items: center;
      gap: 0.3rem;
      padding: 1rem;
      border-bottom: 1px solid #f0f0f0;
      img {
        width: 30px;
      }
      span {
        font-weight: 800;
      }
    }
    .mobile__score__main {
      width: 100%;
      padding: 1.5rem 1.2rem;
      background-color: white;
      position: relative;
      .mobile__real__board {
        position: absolute;
        width: 100%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        justify-content: center;
        gap: 1rem;
        align-items: center;
        &.opac-down {
          opacity: 0.55;
        }
        .mobile__board__component {
          display: flex;
          align-items: center;
          gap: 1.8rem;
          &.reverse {
            flex-direction: row-reverse;
            > div {
              &:first-child {
                flex-direction: row-reverse;
              }
            }
          }
          > div {
            display: flex;
            align-items: center;
            gap: 0.6rem;
            > div {
              &:first-child {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 0.3rem;
                span {
                  &:last-child {
                    font-size: 14px;
                    color: #ccc;
                  }
                }
              }
              &:last-child {
                img {
                  width: 30px;
                }
              }
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: 1500px) {
    flex-direction: column;
    gap: 2rem;
    .swiper.date__swiper {
      order: 1;
    }
    .score__board {
      display: none;
    }
    .mobile__score__board {
      display: block;
    }
  }
  @media screen and (max-width: 600px) {
    .mobile__score__main {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      align-items: center;
      .mobile__real__board {
        position: relative !important;
        transform: translate(-50%, 0) !important;
      }
    }
  }
  @media screen and (max-width: 490px) {
    .mobile__score__main {
      position: relative;
      > span {
        align-self: start;
      }
      .mobile__real__board {
        flex-direction: column;
        .mobile__board__component {
          width: 100%;
          justify-content: space-between;
          &.reverse {
            flex-direction: row !important;
          }
          > div {
            flex-direction: row-reverse;
            > div {
              &:first-child {
                flex-direction: row !important;
                gap: 0.7rem !important;
              }
            }
          }
        }
        > span {
          position: absolute;
          top: -33px;
          left: 46px;
          display: block;
          padding: 0.1rem 0.2rem;
          background-color: #ccc;
          color: black;
          font-size: 12px;
        }
      }
    }
  }
`;

const MainContents = ({ kbo, setActiveIndex, activeIndex }) => {
  const filteredKbo = groupByMonthAndDay(kbo);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const { selectedMonth } = useStore();

  const kboArray =
    filteredKbo[selectedMonth][
      Object.keys(filteredKbo[selectedMonth])[activeIndex]
    ];

  return (
    <CalendarMain className="calendar__main">
      <ScoreBoard
        kboArray={kboArray}
        activeIndex={activeSlideIndex}
        setActiveIndex={setActiveSlideIndex}
      />
      <MobileScoreboard data={kboArray[activeSlideIndex]} />
      <ThumbnailSlider
        kboArray={kboArray}
        activeIndex={activeSlideIndex}
        setActiveIndex={setActiveSlideIndex}
      />
      <DateSwiper kbo={kbo} setActiveIndex={setActiveIndex} />
    </CalendarMain>
  );
};

export default MainContents;
