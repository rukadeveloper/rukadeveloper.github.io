import React, { useRef, useState } from "react";

import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import JoinHeader from "../../shared/join-header/JoinHeader";
import JoinCheck from "../../private/join/JoinCheck";

const Join = styled.div`
  &#join__wrapper {
   .join__inner {
      max-width: 600px;
      margin: 0 auto;
    #join-check {
      margin-bottom: 50px;
      > h2 {
        font-size: 1.3rem;
        span {
          color: #1e9171;
        }
      }
      #join-box {
        width: 100%;
        height: 150px;
        border: 1px solid rgba(0, 0, 0, 0.35);
        border-radius: 1rem;
        margin-top: 16px;
        padding: 1rem;
        overflow-y: scroll;
        p {
          color: rgba(0, 0, 0, 0.75);
          line-height: 1.6;
          letter-spacing: -0.5px;
          font-size: 0.87rem;
          margin-bottom: 30px;
          &:last-child {
            margin-bottom: 0;
          }
        }
      }
      #checkbox {
        margin-top: 20px;
        display: flex;
        align-items: center;
        gap: 1rem;
        input {
          display: none;
        }
        label {
          font-size: 1.1rem;
        }
        &::before {
          content: "";
          display: block;
          width: 20px;
          height: 20px;
          background-color: rgb(156, 154, 154, 0.55);
          border-radius: 50%;
        }
        &.checked {
          position: relative;
          &::before {
            background-color: #fff;
            border: 1px solid rgba(0, 0, 0, 0.35);
          }
          &::after {
            content: "";
            position: absolute;
            left: 5px;
            display: block;
            width: 10px;
            height: 10px;
            background-color: #1e9171;
            border-radius: 50%;
          }
        }
      }
    }
    > button {
        width: 100%;
        padding: 1.2rem 0;
        font-size: 1.1rem;
        background-color: #1e9171;
        color: #fff;
        border-radius: 30px;
        margin-bottom: 20px;
        &:disabled {
            opacity: .1;
        }
    }
  }
@media screen and (max-width: 950px) {
  &#join__wrapper {
    .join__inner {
      #join-check {
        width: 500px;
        margin: 0 auto;
        margin-bottom: 60px;
        > h2 {
          font-size: 1rem;
        }
        #checkbox {
          &::before {
            width: 14px;
            height: 14px;
          }
          label {
              font-size: 0.9rem;
          }
          &.checked {
            &::after {
              width: 6px;
              height: 6px;
              left: 4px;
              bottom: 5px;
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 500px) {
  &#join__wrapper {
    .join__inner {
      max-width: 300px;
      #join-check {
        width: 300px;
      }
    }
  }
}
`;

const MainJoin = () => {
  const navigate = useNavigate();

  const [firstChecked, setFirstChecked] = useState(false);
  const [secondChecked, setSecondChecked] = useState(false);
  const firstRef = useRef(null);
  const secondRef = useRef(null);
  const goJoin2 = () => {
    navigate("/join/2");
  };

  const first = () => {
    setFirstChecked((prev) => !prev);
    if (firstRef.current) {
      firstRef.current.click();
    }
  };

  const second = () => {
    setSecondChecked((prev) => !prev);
    if (secondRef.current) {
      secondRef.current.click();
    }
  };

  return (
    <Join id="join__wrapper">
      <div className="join__inner">
        <JoinHeader activeClass={0} />
        <JoinCheck
          head={"개인정보 이용방침"}
          htmlFor="first"
          isMust={true}
          click={first}
          checked={firstChecked}
          commonRef={firstRef}
        />
        <JoinCheck
          head={"선택적 개인정보 수집·이용내역 동의"}
          htmlFor="second"
          isMust={false}
          click={second}
          checked={secondChecked}
          commonRef={secondRef}
        />
        <button disabled={!firstChecked || !secondChecked} onClick={goJoin2}>
          다음
        </button>
      </div>
    </Join>
  );
};

export default MainJoin;
