import React from "react";

import styled from "styled-components";
import ResetInput from "./ResetInput";
import useLoginToken from "../../../store/useLoginToken";

const Setter = styled.div`
  #inner {
    max-width: 600px;
    margin: 0 auto;
    > h2 {
      padding-top: 10rem;
      text-align: center;
      font-size: 2.2rem;
    }
    > span {
      margin-top: 30px;
      display: block;
      text-align: center;
      margin-bottom: 60px;
    }
  }
`;

const ResetWrapper = styled.form`
  #reset__input {
    display: flex;
    flex-direction: column;
    gap: 20px;
    position: relative;
    margin-bottom: 30px;
    label {
      font-size: 1.2rem;
      font-weight: 700;
    }
    input {
      width: 80%;
      padding: 1rem 1.9rem;
      border: 1px solid rgba(0, 0, 0, 0.35);
      border-radius: 30px;
      font-size: 0.9rem;
      outline: none;
      &[readOnly] {
        opacity: 0.4;
      }
    }
    button {
      width: 18%;
      font-size: 0.9rem;
      padding: 1rem 0;
      padding-top: 1.2rem;
      background-color: #1e9171;
      color: #fff;
      border-radius: 30px;
      position: absolute;
      bottom: 0;
      right: 0;
      &:disabled {
        opacity: 0.3;
      }
    }
  }
`;

const Reset = () => {
  const { loginData } = useLoginToken();

  console.log(loginData);

  return (
    <Setter>
      <div id="inner">
        <h2>정보 수정하기</h2>
        <span>올바르게 수정해주세요.</span>
        <ResetWrapper></ResetWrapper>
      </div>
    </Setter>
  );
};

export default Reset;
