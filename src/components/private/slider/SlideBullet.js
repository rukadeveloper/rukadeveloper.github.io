import React from "react";

import styled from "styled-components";

const SliderBullet = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
  li {
    display: flex;
    align-items: center;
    button {
      width: 0.9rem;
      height: 0.9rem;
      border-radius: 50%;
      background-color: black;
      transition: all ease-in-out 0.6s;
      &.active {
        width: 2.3rem;
        height: 0.6rem;
        border-radius: 0.6rem;
        background-color: #bd4857;
      }
      span {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
      }
    }
  }
`;

const SlideBullet = ({ activeIndex, sliderImages, clickBullet }) => {
  return (
    <SliderBullet>
      {sliderImages.map((_, i) => (
        <li key={i}>
          <button
            className={`${activeIndex === i ? "active" : ""}`}
            onClick={() => {
              clickBullet(i);
            }}
          >
            <span>button{i + 1}</span>
          </button>
        </li>
      ))}
    </SliderBullet>
  );
};

export default SlideBullet;
