import React from "react";

import styled from "styled-components";
import ReviewTitle from "./ReviewTitle";
import ReviewSlide from "./ReviewSlide";

const Review = styled.div`
  &.rev-section {
    width: 90%;
    background-color: rgb(245, 248, 247);
    height: 500px;
    border-radius: 0 10px 10px 0;
    position: relative;
    .rev-inner {
      max-width: 80%;
      margin: 0 auto;
      height: 100%;
      display: flex;
      align-items: center;
      .rev-tit {
        > h2 {
          font-size: 1.9rem;
          padding-bottom: 1.3rem;
        }
        > span {
          letter-spacing: 3px;
          color: rgba(0, 0, 0, 0.65);
        }
        > p {
          margin-top: 20px;
          margin-bottom: 0;
          line-height: 1.5;
        }
        > button {
          margin-top: 2.2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 200px;
          padding: 0.5rem 1.4rem;
          border: 1px solid rgba(0, 0, 0, 0.65);
          border-radius: 30px;
          transition: 1s ease-in-out;
          span {
            font-size: 1.1rem;
          }
          div {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            background-color: #000;
            display: flex;
            justify-content: center;
            align-items: center;
            svg {
              fill: #fff;
            }
          }
          &:hover {
            background-color: rgba(0, 0, 0, 0.65);
            border: none;
            span {
              color: #fff;
            }
            div {
              background-color: #fff;
              svg {
                fill: #000;
              }
            }
          }
        }
      }
      .rev-slide {
        height: 400px;
        position: absolute;
        right: -80px;
        overflow: hidden;
        .rev-slide-wrapper {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-gap: 20px;
          .rev-card {
            width: 300px;
            padding: 1rem;
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 1px 4px 0px rgba(0, 0, 0, 0.35);
            > p {
              line-height: 1.6;
              font-size: 14px;
              padding-bottom: 1.2rem;
              margin-bottom: 1.2rem;
              border-bottom: 1px solid #000;
            }
            .rev_profile_and_id {
              display: flex;
              align-items: center;
              gap: 20px;
              .rev_profile {
                width: 30px;
                height: 30px;
                border-radius: 50%;
                overflow: hidden;
                img {
                  width: 100%;
                  height: 100%;
                  object-fit: cover;
                }
              }
            }
            &:nth-child(2n - 1) {
              margin-left: 20px;
            }
            &:nth-child(2n) {
              transform: translateY(-30px);
            }
            &:hover {
              background-color: #000;
              > p {
                color: #fff;
                border-bottom: 1px solid #fff;
              }
              .rev_profile_and_id {
                > span {
                  color: #fff;
                }
              }
            }
          }
        }
      }
    }
  }

  @keyframes autoSlide {
    from {
      transform: translateY(30px);
    }
    to {
      transform: translateY(-500px);
    }
  }

  @media screen and (max-width: 1020px) {
    &.rev-section {
      height: 900px;
      .rev-inner {
        flex-direction: column;
        align-items: center;
        .rev-tit {
          margin-top: 80px;
        }
        .rev-slide {
          max-width: 660px;
          margin: 0 auto;
          margin-top: 80px;
          left: 0;
          right: 0;
          bottom: 80px;
          .rev-slide-wrapper {
            .rev-card {
              &:nth-child(2n) {
                margin-right: 20px;
              }
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 750px) {
    &.rev-section {
      .rev-inner {
        .rev-slide {
          max-width: 500px;
          .rev-slide-wrapper {
            .rev-card {
              width: 220px;
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 580px) {
    &.rev-section {
      width: 100%;
      border-radius: 0;
      .rev-inner {
      }
    }
  }

  @media screen and (max-width: 480px) {
    &.rev-section {
      .rev-inner {
        .rev-slide {
          .rev-slide-wrapper {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 30px;
            .rev-card {
              &:nth-child(2n) {
                margin-right: 0;
                transform: translateY(0);
              }
              &:nth-child(2n-1) {
                margin-left: 0;
              }
            }
          }
        }
      }
    }
  }
`;

const Reviewer = () => {
  return (
    <Review className="rev-section">
      <div className="rev-inner">
        <ReviewTitle />
        <ReviewSlide />
      </div>
    </Review>
  );
};

export default Reviewer;
