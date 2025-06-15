import React from "react";

import styled from "styled-components";
import BusinessSlider from "./BusinessSlider";

const Introducts = styled.div`
  &.int-wrapper {
    > h2 {
      text-align: center;
      padding-top: 12rem;
      font-size: 2.4rem;
    }
    > span {
      display: block;
      margin-top: 16px;
      text-align: center;
      letter-spacing: 3px;
    }
    > p {
      text-align: center;
      font-size: 1.1rem;
      line-height: 1.4;
      color: rgba(0, 0, 0, 0.55);
      margin-bottom: 3.4rem;
    }
    .b-slider {
      .b-slider-inner {
        max-width: 80%;
        margin: 0 auto;
        overflow: hidden;
        position: relative;
        .b-slider-wrapper {
          display: flex;
          align-items: end;
          gap: 60px;
          padding-top: 6.5rem;
          margin-bottom: 8.5rem;
          .b-each {
            flex-shrink: 0;
            width: 21%;
            height: 300px;
            position: relative;
            transform-origin: bottom;
            transition: height 1s ease-in-out;
            .b-imgBx {
              width: 100%;
              height: 100%;
              img {
                width: 100%;
                height: 100%;
                object-fit: cover;
              }
            }
            .b-text {
              position: absolute;
              padding: 0;
              background-color: #416fcd;
              color: #fff;
              right: 0;
              transform: translateY(-50%);
              height: 0;
              transition: all ease-in-out 1s;
            }
            &:hover {
              height: 350px;
              .b-text {
                padding: 1.2rem;
                height: 53px;
              }
            }
          }
        }
        .b-btn {
          position: absolute;
          bottom: 40px;
          display: flex;
          align-items: center;
          .btn-each {
            border: 1px solid rgba(0, 0, 0, 0.55);
            width: 40px;
            height: 40px;
            transition: all 1s ease-in-out;
            &.next {
              margin-left: -1px;
            }
            &:hover {
              background-color: rgba(0, 0, 0, 0.55);
              border: none;
              svg {
                fill: #fff;
              }
            }
          }
          > p {
            margin-left: 30px;
            font-size: 1.2rem;
            font-family: "Poppins", sans-serif !important;
            display: flex;
            gap: 0.2rem;
          }
        }
      }
    }
  }

  @media screen and (max-width: 1210px) {
    &.int-wrapper {
      .b-slider {
        .b-slider-inner {
          .b-slider-wrapper {
            .b-each {
              width: 29%;
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 1000px) {
    &.int-wrapper {
      .b-slider {
        .b-slider-inner {
          .b-slider-wrapper {
            .b-each {
              width: 45%;
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 700px) {
    &.int-wrapper {
      > h2 {
        padding-top: 5rem;
        font-size: 1.9rem;
      }
      > span {
        font-size: 14px;
      }
      > p {
        font-size: 1rem;
      }
      .b-slider {
        .b-slider-inner {
          .b-slider-wrapper {
            padding-top: 0;
            gap: 0;
            .b-each {
              width: 100%;
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 500px) {
    &.int-wrapper {
      > p {
        font-size: 0.9rem;
      }
    }
  }

  @media screen and (max-width: 440px) {
    &.int-wrapper {
      > p {
        font-size: 0.75rem;
        line-height: 1.6;
      }
    }
  }
`;

const Introduction = () => {
  return (
    <Introducts className="int-wrapper">
      <h2>사업 소개</h2>
      <span>BUSINESS INTRODUCTION</span>
      <p>
        야구의 붐이 일었던 2024년 봄, 저희는 이 야구흥행을 좀 더 이용하기 위해서{" "}
        <br />
        직관 구독 서비스를 직접 개발하였습니다.
      </p>
      <BusinessSlider />
    </Introducts>
  );
};

export default Introduction;
