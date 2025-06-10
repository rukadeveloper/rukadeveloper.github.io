import React, { useRef } from "react";
import useObserve from "../../../hooks/useObserve";

import styled from "styled-components";
import ProductsContent from "./ProductsContent";

const ProductsComp = styled.div`
  
  &.products-sec {
    &.product-animate {
      > h2 {
        span {
          transform: translateY(0);
        }
      }
      > p {
        opacity: 1;
      }
      .products-content {
        .products-content-swiper {
          .products-content-swiper-wrapper {
            .products-content-slide {
              opacity: 1;
              transform: translateX(0);
            }
          }
        }
      }
    }
    margin-top: 2.4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    > h2 {
      overflow: hidden;
      font-size: 40px;
      line-height: 40px;
      text-align: center;
      display: inline-block;
      position: relative;
      span {
        display: inline-block;
        transform: translateY(100%);
        transition: all ease-in-out .6s;
      }
    }
    > p {
      opacity: 0;
      transition: opacity ease-in-out .6s
      text-align: center;
      display: inline-block;
      font-size: 20px;
      font-weight: 200;
      line-height: 1.5;
      margin-bottom: 5rem;
      span {
        font-weight: 500;
        display: inline-block;
        position: relative;
        z-index: 2;
        &::before {
          content: "";
          position: absolute;
          bottom: 4px;
          left: 0;
          right: 0;
          height: 7px;
          background-image: linear-gradient(to right, #e5f4f1 0%, #fae4f0 100%);
          z-index: -1;
        }
      }
    }
    .products-content {
      width: 100%;
      .products-content-swiper {
        position: relative;
        display: flex;
        overflow: hidden;
        .products-content-swiper-wrapper {
          display: flex;
          gap: 1rem;
          padding-bottom: 80px;
          .products-content-slide {
            opacity: 0;
            transform: translateX(-100%);
            transition: all ease-in-out 1s 1s;
            flex-shrink: 0;
            flex-basis: 24%;
            position: relative;
            .products-imgBox {
              height: 350px;
              background-color: #e1e1e1;
              margin-bottom: 20px;
              img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                vertical-align: middle;
              }
              div.pack-box {
                position: absolute;
                top: 30px;
                left: 30px;
                width: 50px;
                height: 50px;
                border-radius: 50%;
                background-color: black;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                box-sizing: content-box;
                padding: 0.3rem;
                span {
                  color: white;
                  &:first-child {
                    font-size: 1.2rem;
                    font-weight: 700;
                  }
                }
              }
            }
            > h2 {
              font-size: 1.05rem;
              font-weight: 400;
              margin-bottom: 1rem;
            }
            > span.original {
              font-family: "Poppins", sans-serif !important;
              &.decoration {
                text-decoration: line-through;
                color: #8a8a8a;
              }
            }
            > div.sale {
              font-family: "Poppins", sans-serif !important;
              .salePercent {
                color: #dd5858;
                font-weight: 600;
              }
              .saled {
                margin-left: 10px;
                font-weight: 600;
              }
            }
          }
        }
        .swiper-bar {
          position: absolute;
          bottom: 30px;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: rgba(0, 0, 0, 0.1);
          .filled-bar {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
          }
        }
      }
    }
  }

  @media screen and (max-width: 1000px) {
    &.products-sec {
      .products-content {
        .products-content-swiper {
          .products-content-swiper-wrapper {
            .products-content-slide {
              flex-basis: 32%;
            }
          }
        }
      }
    }
  }
  
  @media screen and (max-width: 845px) {
    &.products-sec {
      .products-content {
        .products-content-swiper {
          .products-content-swiper-wrapper {
            .products-content-slide {
              flex-basis: 49%;
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 620px) {
      &.products-sec {
        .products-content {
          .products-content-swiper {
            .products-content-swiper-wrapper {
              width: 100%;
              .products-content-slide {
                flex-basis: 100%;
                .products-imgBox {
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  img {
                    object-fit: contain;
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

const Products = () => {
  const productRef = useRef(null);
  useObserve(productRef, "product-animate", 0.4);

  return (
    <ProductsComp className="products-sec" ref={productRef}>
      <h2>
        <span>Products Goods</span>
      </h2>
      <p>
        Let buy some like KBO League Goods
        <br />
        <span>Are Ready sightseeing baseball?</span>
      </p>
      <ProductsContent />
    </ProductsComp>
  );
};

export default Products;
