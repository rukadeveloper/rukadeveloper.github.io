import React from "react";

import styled from "styled-components";

const Nest = styled.div`
  &#nest-modal {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 350px;
    height: 300px;
    background-color: #fff;
    border-radius: 20px;
    z-index: 1000000;
    padding: 0.9rem;
    > h2 {
      color: rgba(0, 0, 0, 0.65);
    }
    > h2,
    h3 {
      text-align: center;
      font-size: 1rem;
      font-weight: 400;
      padding-top: 20px;
    }
    h3 {
      font-size: 1.3rem;
      font-weight: 600;
    }
    p {
      text-align: center;
      margin-top: 40px;
    }
    button {
      width: 100%;
      font-size: 1.1rem;
      padding: 0.9rem 0;
      padding-top: 1.1rem;
      background-color: #1e9171;
      margin-bottom: 10px;
      color: #fff;
    }
  }
`;

const NestModal = ({ error, modalClose, modalSelect }) => {
  return (
    <Nest id="nest-modal">
      <h2>Nesting Validating</h2>
      <h3>아이디 중복 검사</h3>
      {error ? <p>{error}</p> : <p style={{ color: "blue" }}>올바릅니다.</p>}
      <button onClick={modalClose}>닫기</button>
      {!error && <button onClick={modalSelect}>아이디 선택하기</button>}
    </Nest>
  );
};

export default NestModal;
