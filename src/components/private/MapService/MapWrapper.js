import React, { useState } from "react";

import styled from "styled-components";
import RegionBullet from "./RegionBullet";
import MapRegion from "./MapRegion";
import MapResult from "./MapResult";

const Mapper = styled.div`
  &.map-section {
    margin-top: 50px;
    height: 600px;
    background-color: #f3f5f5;
    .map-inner {
      max-width: 80%;
      margin: 0 auto;
      height: 100%;
      display: flex;
      gap: 30px;
      align-items: center;
      .region-bullet {
        display: flex;
        flex-direction: column;
        gap: 20px;
        button {
          width: 200px;
          font-size: 1rem;
          padding: 1.1rem 0;
          background-color: #fff;
          color: rgb(77, 105, 100);
          border-radius: 30px;
          position: relative;
          &.active {
            background-color: rgb(77, 105, 100);
            color: #fff;
            svg {
              position: absolute;
              display: block;
              top: 0;
              bottom: 0;
              margin: auto 0;
              right: 30px;
            }
          }
          svg {
            display: none;
            fill: #fff;
          }
          &:hover {
            background-color: rgb(77, 105, 100);
            color: #fff;
            svg {
              position: absolute;
              display: block;
              top: 0;
              bottom: 0;
              margin: auto 0;
              right: 30px;
              g#korea {
                path {
                  &.active {
                    fill: rgb(77, 105, 100) !important;
                  }
                }
              }
            }
          }
        }
      }
    }
    .map-result {
      display: flex;
      flex-direction: column;
      gap: 30px;
      .result-box {
        width: 400px;
        padding: 1rem 1.4rem;
        background-color: #fff;
        border-radius: 30px;
        box-shadow: 0 1px 1px 0px rgba(0, 0, 0, 0.15);
        display: flex;
        justify-content: space-between;
        align-items: center;
        > div {
          &:first-child {
            padding: 0.4rem;
            padding-top: 0.6rem;
            border: 1px solid rgba(77, 105, 100, 0.45);
            width: 50%;
            text-align: center;
            font-size: 14px;
            border-radius: 30px;
            color: rgba(77, 105, 100, 0.45);
          }
          &.matching {
            width: 120px;
            padding: 0.6rem 0;
            font-size: 14px;
            background-color: rgb(77, 105, 100);
            border-radius: 30px;
            color: #fff;
            text-align: center;
          }
        }
      }
    }
  }

  @media screen and (max-width: 1100px) {
    &.map-section {
      height: 900px;
      .map-inner {
        flex-direction: column;
        .region-bullet {
          flex-direction: row;
          margin-top: 100px;
          button {
            width: 120px;
            display: flex;
            justify-content: center;
            align-items: center;
            padding-left: 20px;
            padding-right: 20px;
            span {
              display: block;
              margin-top: 3px;
            }
            &.active,
            &:hover {
              justify-content: space-between;
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 850px) {
    &.map-section {
      height: 1000px;
      .map-inner {
        .region-bullet {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 26px;
        }
      }
    }
  }

  @media screen and (max-width: 470px) {
    &.map-section {
      height: 1050px;
      .map-inner {
        .region-bullet {
          grid-template-columns: 1fr 1fr;
        }
      }
    }
  }

  @media screen and (max-width: 410px) {
    &.map-section {
      .map-inner {
        .map-result {
          .result-box {
            width: 300px;
          }
        }
      }
    }
  }
`;

const MapWrapper = () => {
  const [active, setActive] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const regionMap = ["경기도", "서울", "경상도", "충청도", "부산", "전라도"];

  return (
    <Mapper className="map-section">
      <div className="map-inner">
        <RegionBullet
          active={active}
          setActive={setActive}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          regionMap={regionMap}
        />
        <MapRegion
          regionMap={regionMap}
          active={active}
          activeIndex={activeIndex}
        />
        <MapResult
          active={active}
          activeIndex={activeIndex}
          regionMap={regionMap}
        />
      </div>
    </Mapper>
  );
};

export default MapWrapper;
