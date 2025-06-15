import React, { forwardRef } from "react";

import styled from "styled-components";
import ProductSlide from "./ProductSlide";

const Products = styled.div`
  &.product-wrapper {
    width: calc(100% - 600px);
    padding: 3rem 5rem;
    .product-inner {
      width: 100%;
      display: flex;
      flex-direction: column;
      > h2 {
        width: 400px;
        font-size: 3.4rem;
        letter-spacing: -2px;
        display: inline-block;
      }
      > span {
        margin-left: 5px;
        margin-top: 0.4rem;
        font-size: 1.2rem;
        display: inline-block;
        color: #666;
        font-weight: 300;
      }
      .product-slide {
        margin-top: 3rem;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;
        .product-box {
          a {
            display: flex;
            flex-direction: column;
            margin-bottom: 2.89rem;
            .product-image-box {
              position: relative;
              width: 100%;
              height: 400px;
              padding-top: 100%;
              background-color: #f4f4f4;
              overflow: hidden;
              border-radius: 8px;
              img {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
              }
            }
            > h2 {
              font-size: 1.3rem;
              padding-top: 1.3rem;
              margin-bottom: 1.1rem;
              position: relative;
              display: inline-block;
              &::before {
                content: "";
                position: absolute;
                top: calc(100% + 4px);
                left: 0;
                width: 100%;
                height: 1px;
                background-color: #000;
              }
            }
            span {
              font-weight: 500;
              font-size: 1.1rem;
              display: inline-block;
            }
          }
          &:last-child {
            a {
              margin-bottom: 0;
            }
          }
          &:nth-child(2n) {
            margin-top: -30px;
          }
        }
      }
    }
  }

  @media screen and (max-width: 1300px) {
    &.product-wrapper {
      padding: 1rem 2rem;
      .product-inner {
        .product-slide {
        }
      }
    }
  }

  @media screen and (max-width: 1210px) {
    &.product-wrapper {
      width: calc(100% - 400px);
    }
  }

  @media screen and (max-width: 1000px) {
    &.product-wrapper {
      .product-inner {
        > h2 {
          font-size: 2.5rem;
        }
        > span {
          font-size: 1rem;
        }
        .product-slide {
          grid-template-columns: 1fr;
          .product-box {
            &:nth-child(2) {
              margin-left: 0;
            }
            &:nth-child(3) {
              align-self: start;
            }
            a {
              .product-image-box {
                height: 300px;
                img {
                  width: 300px;
                  height: 300px;
                }
              }
              > h2 {
                font-size: 1.2rem;
              }
              > span {
                font-size: 1.3rem;
              }
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 810px) {
    &.product-wrapper {
      padding: 1rem 2rem;
      .product-inner {
        .product-slide {
          display: flex;
          flex-direction: row;
          gap: 0;
          grid-gap: 0;
          overflow: hidden;
          > div.product-box {
            flex-shrink: 0;
            flex-basis: 100%;
            &:nth-child(2n) {
              margin-top: 0;
            }
            a {
              > h2 {
                font-size: 1rem;
              }
              > span {
                font-size: 1rem;
              }
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 740px) {
    &.product-wrapper {
      .product-inner {
        > h2 {
          font-size: 2.1rem;
        }
        .product-slide {
          .product-box {
            a {
              > h2 {
                font-size: 0.9rem;
                padding: 0;
                margin-top: 1.3rem;
                margin-bottom: 0.9rem;
              }
              > span {
                font-size: 0.85rem;
              }
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 700px) {
    &.product-wrapper {
      width: 100%;
      padding-top: 4rem;
      .product-inner {
        .product-slide {
          div.product-box {
            flex-basis: 47%;
            margin-right: 30px;
            &:last-child {
              margin-right: 0;
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 520px) {
    &.product-wrapper {
      .product-inner {
        .product-slide {
          .product-box {
            flex-basis: 100% !important;
            a {
              > h2 {
                font-size: 1.4rem;
              }
              > span {
                font-size: 1.25rem;
              }
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 410px) {
    &.product-wrapper {
      .product-inner {
        .product-slide {
          .product-box {
            a {
              > h2 {
                font-size: 1.15rem;
              }
              > span {
                font-size: 1.05rem;
              }
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 370px) {
    @media screen and (max-width: 410px) {
      &.product-wrapper {
        .product-inner {
          .product-slide {
            .product-box {
              a {
                > h2 {
                  font-size: 0.95rem;
                }
                > span {
                  font-size: 0.85rem;
                }
              }
            }
          }
        }
      }
    }
  }
`;

const ProductWrapper = forwardRef((props, ref) => {
  return (
    <Products className="product-wrapper">
      <div className="product-inner" ref={ref}>
        <h2>인기 상품</h2>
        <span>Popular Products</span>
        <ProductSlide />
      </div>
    </Products>
  );
});

export default ProductWrapper;
