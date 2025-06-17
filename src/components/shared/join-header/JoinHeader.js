import React from "react";

import styled from "styled-components";
import { cn } from "../../../utils/utils";

const JoinCommonHeader = styled.div`
  &#common__header {
    width: 100%;
    padding-top: 160px;
    > h2 {
      text-align: center;
      font-size: 2.3rem;
    }
  }
`;

const Levels = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  position: relative;
  margin-bottom: 140px;
  &::before {
    content: "";
    position: absolute;
    width: calc(100% - 50px);
    left: 50%;
    height: 1px;
    background-color: #c8cfcd;
    transform: translateX(-50%) translateY(4px);
    z-index: -1;
  }
  .each-level {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #c8cfcd;
    &::before {
      content: "";
      display: block;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: #c8cfcd;
      margin-bottom: 20px;
    }
    &.active {
      color: #000;
      &::before {
        background-color: #1e9171;
      }
      &::after {
        content: "";
        width: 1rem;
        height: 1rem;
        border: 1px solid #1e9171;
        border-radius: 50%;
        position: absolute;
        top: 0;
        transform: translateY(-3px);
      }
    }
  }
`;

const JoinHeader = ({ activeClass }) => {
  const levels = ["약관 동의", "정보 입력", "가입 완료"];

  return (
    <JoinCommonHeader id="common__header">
      <h2>회원가입</h2>
      <Levels>
        {levels.map((level, i) => (
          <div className={cn("each-level", activeClass === i && "active")}>
            {level}
          </div>
        ))}
      </Levels>
    </JoinCommonHeader>
  );
};

export default JoinHeader;
