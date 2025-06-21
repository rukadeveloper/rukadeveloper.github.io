import React from "react";

import styled from "styled-components";

const BarLoad = styled.div`
  &.loader-bar {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000000000000;
    width: 100%;
    height: 5px;
    background-color: rgba(0, 0, 0, 0.55);
    span {
      position: absolute;
      left: 0;
      top: 0;
      width: 20%;
      height: 100%;
      background-color: rgb(220, 11, 11);
      animation: loaderInfinite 1s infinite alternate;
    }

    @keyframes loaderInfinite {
      from {
        transform: translateX(0);
      }
      to {
        transform: translateX(100vw);
      }
    }
  }
`;

const BarLoader = () => {
  return (
    <BarLoad className="loader-bar">
      <span className="real-loader-bar"></span>
    </BarLoad>
  );
};

export default BarLoader;
