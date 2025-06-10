import React from "react";

import styled from "styled-components";

import SamsungIndicator from "./SamsungIndicator";
import SamsungProducts from "./SamsungProducts";

const SamsungFullPage = styled.div`
  width: 100%;
  height: 100vh;
  #indicator {
    position: fixed;
    top: 50%;
    transform: translateY(-50%);
    left: 60px;
    li {
      margin-bottom: 30px;
      display: flex;
      align-items: center;
      &:last-child {
        margin-bottom: 0;
      }
      &:before {
        content: "";
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: black;
        opacity: 0.45;
      }
      a {
        color: black;
        display: block;
        margin-left: 20px;
        font-size: 22px;
        opacity: 0.45;
      }
    }
  }
  #section.section1 {
    width: 100%;
    height: 100%;
    .inner {
      max-width: 1300px !important;
      > h2 {
        text-align: center;
        padding-top: 130px;
        font-size: 36px;
        > span {
          color: #1f5eb8;
        }
      }
      .drag-marker {
        display: none;
      }
      .samsung-product-list {
        .samsung-product-list-wrapper {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          margin-top: 3.4rem;
          .samsung-product-slide {
            flex: 1;
            a {
              padding: 30px 0;
              display: flex;
              flex-direction: column;
              align-items: center;
              transition: all ease-in-out 0.6s;
              .imgBox {
                width: 100%;
                height: 250px;
                img {
                  width: 100%;
                  height: 100%;
                  object-fit: contain;
                }
              }
              .plus {
                width: 50px;
                height: 50px;
                overflow: hidden;
                opacity: 1;
                border-radius: 50%;
                border: 1px solid #ccc;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-top: 20px;
                transition: height ease-in-out 0.5s;
                svg {
                  width: 20px;
                  height: 20px;
                  stroke: #ccc;
                }
              }
              .productName {
                font-size: 25px;
                font-weight: 700;
                text-align: center;
                margin-top: 20px;
              }
              .details {
                visibility: hidden;
                opacity: 0;
                transition: all ease-in-out 0.6s;
                display: flex;
                flex-direction: column;
                align-items: center;
                > p {
                  font-size: 20px;
                  line-height: 1.3;
                  text-align: center;
                }
                > button {
                  width: 150px;
                  font-size: 18px;
                }
              }
              &:hover {
                background-color: #f7f7f7;
                border-radius: 0 2rem 0 2rem;
                .plus {
                  border: none;
                  height: 0;
                  opacity: 0;
                }
                .details {
                  visibility: visible;
                  opacity: 1;
                }
              }
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 1160px) {
    #section.section1 {
      .inner {
        max-width: 80% !important;
        .drag-marker {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 1.5rem;
          margin-top: 2.5rem;
          animation: inf 2s infinite alternate;
          svg {
            width: 1.2rem;
            height: 1.2rem;
            stroke: #1966bc;
          }
          span {
            font-size: 24px;
            font-weight: 400;
            color: #1966bc;
          }
        }
        .samsung-product-list {
          overflow: hidden;
          .samsung-product-list-wrapper {
            .samsung-product-slide {
              flex: 0 0 auto;
              width: calc((100% - 1.5 * 16px) / 2);
              a {
                background-color: #f7f7f7;
                border-radius: 0 2rem 0 2rem;
                .plus {
                  display: none;
                }
                .details {
                  visibility: visible;
                  opacity: 1;
                }
              }
            }
          }
        }
      }
    }
    @keyframes inf {
      from {
        transform: translateX(-40px);
      }
      to {
        transform: translteX(40px);
      }
    }
  }

  @media screen and (max-width: 1000px) {
    #section.section1 {
      .inner {
        .samsung-product-list {
          .samsung-product-list-wrapper {
            .samsung-product-slide {
              a {
                .productName {
                  font-size: 20px;
                }
                .details {
                  p {
                    font-size: 17px;
                  }
                  button {
                    font-size: 1rem;
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 895px) {
    #section.section1 {
      .inner {
        > h2 {
          font-size: 28px;
        }
      }
    }
  }

  @media screen and (max-width: 820px) {
    #section.section1 {
      .inner {
        .samsung-product-list {
          .samsung-product-list-wrapper {
            .samsung-product-slide {
              a {
                .productName {
                  font-size: 1rem;
                }
                .details {
                  > p {
                    font-size: 15px;
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 700px) {
    #section.section1 {
      .inner {
        > h2 {
          font-size: 22px;
        }
        .samsung-product-list {
          .samsung-product-list-wrapper {
            .samsung-product-slide {
              width: 100%;
              margin-right: 0;
              a {
                .productName {
                  font-size: 20px;
                }
                .details {
                  p {
                    font-size: 19px;
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 445px) {
    #section.section1 {
      .inner {
        > h2 {
          font-size: 22px;
          line-height: 1.3;
          span {
            display: block;
          }
        }
        .samsung-product-list {
          .samsung-product-list-wrapper {
            .samsung-product-slide {
              a {
                .productName {
                  font-size: 17px;
                }
                .details {
                  p {
                    font-size: 17px;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

const Samsung = () => {
  return (
    <SamsungFullPage id="fullpage">
      <SamsungIndicator />
      <SamsungProducts />
    </SamsungFullPage>
  );
};

export default Samsung;
