import React from "react";

import styled from "styled-components";

const Load = styled.div`
  position: fixed;
  width: 350px;
  height: 300px;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  background-color: rgba(0, 0, 0, 0.65);
  border-radius: 20px;
  .loader {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: inline-block;
    border-top: 4px solid #fff;
    border-right: 4px solid transparent;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
  .loader::after {
    content: "";
    box-sizing: border-box;
    position: absolute;
    left: 0;
    top: 0;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    border-bottom: 4px solid #ff3d00;
    border-left: 4px solid transparent;
    z-index: 12;
  }
  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Loading = () => {
  return (
    <Load>
      <span className="loader"></span>
    </Load>
  );
};

export default Loading;
