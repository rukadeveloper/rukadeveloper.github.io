import React, { useState } from "react";

import styled from "styled-components";
import StadiumTitle from "./StadiumTitle";
import StadiumBullet from "./StadiumBullet";
import StadiumDetails from "./StadiumDetails";
import StadiumContent from "./StadiumContent";

const StadiumComp = styled.div`
  &.stadium-sec {
    background-color: #f4f5f9;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 190px;
    padding-top: 80px;
    padding-bottom: 80px;
    position: relative;
    .stadium-sec-title {
      > h2 {
        font-size: 39px;
        font-weight: 600;
      }
      > p {
        font-size: 18px;
        font-weight: 200;
        line-height: 1.4;
      }
    }
    .stadium-sec-content {
      display: flex;
      .stadium-sec-bullets {
        width: 640px;
        margin-top: 2.2rem;
        > ul {
          &:first-child {
            display: flex;
            flex-wrap: wrap;
            li {
              width: calc((100% - 2 * 20px) / 3);
              height: 160px;
              background-color: white;
              &:not(:nth-child(3n)) {
                margin-right: 20px;
              }
              &:not(:nth-child(7)),
              &:not(:nth-child(8)),
              &:not(:nth-child(9)) {
                margin-bottom: 20px;
              }
              &.active {
                a {
                  background-color: #1a3b80;
                  color: white;
                }
              }
              &:hover {
                a {
                  background-color: #1a3b80;
                  color: white;
                }
              }
              a {
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 20px;
                text-align: center;
                color: #1a3b80;
                transition: all ease-in-out 0.6s;
              }
            }
          }
          &:last-child {
            display: flex;
            justify-content: center;
            gap: 1rem;
            margin-top: 1.5rem;
            li {
              width: 0.7rem;
              height: 0.7rem;
              border-radius: 50%;
              background-color: #c5c9d9;
              cursor: pointer;
              transition: background-color ease-in-out 0.6s;
              &.active {
                background-color: #1a3b80;
              }
            }
          }
        }
      }
      .stadium-sec-details {
        width: 360px;
        margin-left: 50px;
        background-color: #1a3b80;
        padding: 2.5rem 2rem;
        position: relative;
        > h2 {
          font-size: 38px;
          color: white;
          font-weight: 300;
          margin-bottom: 30px;
        }
        > p {
          font-size: 24px;
          color: white;
          color: #7482a8;
          margin-bottom: 30px;
        }
        > span {
          font-size: 1rem;
          line-height: 1.4;
          color: white;
          opacity: 0.45;
          font-weight: 300;
        }
        > a {
          position: absolute;
          bottom: 2.5rem;
          left: 2rem;
          color: white;
        }
        > img {
          width: 140px;
          position: absolute;
          bottom: -30px;
          right: -30px;
        }
      }
    }
  }

  @media screen and (max-width: 1260px) {
    &.stadium-sec {
      .stadium-sec-title {
        > h2 {
          font-size: 38px;
          text-align: center;
        }
        > p {
          font-size: 18px;
          text-align: center;
        }
      }
      .stadium-sec-content {
        flex-direction: column;
        .stadium-sec-details {
          margin-left: 0;
          width: 100%;
          order: 2;
          > h2 {
            font-size: 50px;
          }
          > span {
            font-size: 22px;
          }
          > a {
            position: static;
            margin-top: 30px;
          }
        }
        .stadium-sec-bullets {
          order: 3;
          width: 100%;
        }
      }
    }
  }

  @media screen and (max-width: 890px) {
    &.stadium-sec {
      .stadium-sec-content {
        .stadium-sec-bullets {
          ul {
            &:first-child {
              li {
                width: calc((100% - 20px) / 2);
                &:nth-child(2n) {
                  margin-right: 0;
                }
                &:nth-child(2n - 1) {
                  margin-right: 20px;
                }
              }
            }
          }
        }
        .stadium-sec-details {
          > h2 {
            font-size: 36px;
          }
          > p {
            font-size: 18px;
          }
          > span {
            font-size: 18px;
          }
        }
      }
    }
  }

  @media screen and (max-width: 786px) {
    &.stadium-sec {
      .stadium-sec-content {
        .stadium-sec-bullets {
          ul {
            &:first-child {
              flex-direction: column;
              li {
                width: 100%;
                margin-right: 0;
              }
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 720px) {
    &.stadium-sec {
      .stadium-sec-content {
        .stadium-sec-details {
          > h2 {
            font-size: 28px;
          }
          > p {
            font-size: 15px;
          }
          > span {
            font-size: 15px;
          }
        }
      }
    }
  }

  @media screen and (max-width: 670px) {
    &.stadium-sec {
      padding-right: 100px;
      padding-left: 100px;
    }
  }

  @media screen and (max-width: 470px) {
    &.stadium-sec {
      .stadium-sec-content {
        .stadium-sec-details {
          > img {
            width: 89px;
          }
        }
      }
    }
  }

  @media screen and (max-width: 450px) {
    &.stadium-sec {
      padding-right: 40px;
      padding-left: 40px;
    }
  }
`;

const Stadium = () => {
  const [frontActiveBullet, setFrontActiveBullet] = useState(0);

  const setBullet = (bulletIdx) => {
    setFrontActiveBullet(bulletIdx);
  };

  return (
    <StadiumComp className="stadium-sec">
      <StadiumTitle />
      <StadiumContent
        setBullet={setBullet}
        frontActiveBullet={frontActiveBullet}
      />
    </StadiumComp>
  );
};

export default Stadium;
