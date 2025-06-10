import React, { useState, useRef } from "react";

import styled from "styled-components";
import NoticeTitle from "./NoticeTitle";
import NoticeSwiper from "./NoticeSwiper";
import NoticeSwiperButton from "./NoticeSwiperButton";
import useClickSlider from "../../../hooks/useClickSlider";

const NoticeComp = styled.div`
  &.notice-sec {
    margin-top: 80px;
    display: flex;
    position: relative;
    .notice-sec-title {
      width: 350px;
      > h2 {
        font-size: 38px;
        font-weight: 500;
        margin-bottom: 20px;
      }
      > span {
        font-weight: 200;
      }
    }
    .notice-sec-swiper {
      width: calc(100% - 350px);
      overflow: hidden;
      padding-bottom: 30px;
      .notice-sec-swiper-wrapper {
        display: flex;
        .notice-sec-swiper-slide {
          background-color: white;
          box-shadow: 0 1px 8px 4px rgba(0, 0, 0, 0.05);
          border-radius: 10px;
          overflow: hidden;
          flex-shrink: 0;
          width: calc((100% - 3 * 20px) / 2.5);
          margin-right: 30px;
          &:last-child {
            margin-right: 0;
          }
          .imgBx {
            height: 340px;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
            margin-bottom: 35px;
            img {
              width: 130%;
              height: 130%;
              object-fit: cover;
            }
          }
          .content {
            padding: 1.5rem 1.8rem;
            > h2 {
              font-size: 20px;
              margin-bottom: 20px;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
            }
          }
        }
      }
    }
    .notice-sec-swiper-button {
      position: absolute;
      bottom: 64px;
      left: 0;
      display: flex;
      align-items: center;
      gap: 1rem;
      > button {
        svg {
          width: 1.5rem;
          height: 1.5rem;
        }
      }
      p {
        margin: 0;
        margin-bottom: 2px;
        display: flex;
        align-items: center;
        gap: 0.4rem;
        font-family: "Poppins", sans-serif;
        span {
          font-size: 20px;
          font-weight: 400;
        }
      }
    }
  }

  @media screen and (max-width: 1060px) {
    &.notice-sec {
      flex-direction: column;
      align-items: center;
      .notice-sec-title {
        > h2 {
          text-align: center;
        }
        > span {
          display: block;
          text-align: center;
        }
        margin-bottom: 2rem;
      }
      .notice-sec-swiper {
        width: 100%;
        padding-bottom: 2rem;
        .notice-sec-swiper-wrapper {
          .notice-sec-swiper-slide {
            width: calc((100% - 2 * 30px) / 3);
          }
        }
      }
      .notice-sec-swiper-button {
        position: static;
      }
    }
  }

  @media screen and (max-width: 768px) {
    &.notice-sec {
      .notice-sec-swiper {
        .notice-sec-swiper-wrapper {
          .notice-sec-swiper-slide {
            width: calc((100% - 30px) / 2);
          }
        }
      }
    }
  }

  @media screen and (max-width: 568px) {
    &.notice-sec {
      .notice-sec-swiper {
        .notice-sec-swiper-wrapper {
          .notice-sec-swiper-slide {
            width: 100%;
          }
        }
      }
    }
  }
`;

const Notice = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  useClickSlider(swiperRef, activeIndex, 1060);

  return (
    <NoticeComp className="notice-sec">
      <NoticeTitle />
      <NoticeSwiper ref={swiperRef} />
      <NoticeSwiperButton
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
    </NoticeComp>
  );
};

export default Notice;
