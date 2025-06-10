import React from "react";

import styled from "styled-components";

const Thumbnail = styled.div`
  display: flex;
  gap: 0.4rem;
  .box,
  .addBox {
    width: 80px;
    height: 80px;
    overflow: hidden;
    border-radius: 8px;
    opacity: 0.45;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    &.active {
      opacity: 1;
      border: 3px solid blue;
    }
  }
  .addBox {
    background-color: #16161e;
    opacity: 0.4;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
  }
  @media screen and (max-width: 1500px) {
    order: 3;
  }
  @media screen and (max-width: 600px) {
    gap: 0.8rem;
    .box,
    .addBox {
      width: 55px;
      height: 55px;
    }
  }
`;

const ThumbnailSlider = ({ kboArray, activeIndex, setActiveIndex }) => {
  return (
    <Thumbnail className="thumbnail__slider">
      {kboArray.slice(0, 4).map((kbo, i) => (
        <button
          onClick={() => {
            setActiveIndex(i);
          }}
          className={`box ${activeIndex === i ? "active" : ""}`}
        >
          <img src={kbo.thumbnail} alt="thumbs" />
        </button>
      ))}
      <button className="addBox">{kboArray.length - 4}+</button>
    </Thumbnail>
  );
};

export default ThumbnailSlider;
