import React from "react";

import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import JoinHeader from "../../shared/join-header/JoinHeader";

const Third = styled.div`
  &#join__third {
    .join__inner {
      max-width: 600px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      p {
        font-size: 1.5rem;
        text-align: center;
        font-weight: 700;
        margin-bottom: 40px;
      }
      button {
        width: 450px;
        margin: 0 auto;
        padding-top: 0.9rem;
        padding-bottom: 0.7rem;
        background-color: #1e9171;
        color: #fff;
        font-size: 1.05rem;
      }
    }
  }
`;

const JoinThird = () => {
  const navigate = useNavigate();

  return (
    <Third id="join__third">
      <div className="join__inner">
        <JoinHeader activeClass={2} />
        <p>축하합니다, 회원가입에 성공하셨습니다!</p>
        <button
          onClick={() => {
            navigate("/login");
          }}
        >
          다시 로그인 페이지로 돌아가기
        </button>
      </div>
    </Third>
  );
};

export default JoinThird;
