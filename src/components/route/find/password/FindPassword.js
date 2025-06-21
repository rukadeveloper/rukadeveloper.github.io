import React, { useState } from "react";

import styled from "styled-components";
import FindAccountHeader from "../../../shared/findAccountHeader/FindAccountHeader";

const FindPws = styled.div`
  &#find__pws {
    max-width: 500px;
    margin: 0 auto;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    form {
      width: 100%;
      b {
        display: block;
        padding-top: 80px;
        font-size: 1.2rem;
        font-weight: 500;
      }
      input {
        width: 100%;
        padding: 0.8rem 1.3rem;
        border: 1px solid #000;
        border-radius: 30px;
        margin-top: 30px;
        outline: none;
      }
      button {
        margin-top: 30px;
        width: 100%;
        font-size: 1.1rem;
        background-color: #000;
        padding: 1rem 0;
        color: #fff;
        border-radius: 30px;
        &:disabled {
          opacity: 0.3;
        }
      }
    }
  }
`;

const FindPassword = () => {
  const [id, setId] = useState("");
  const [idTouched, setIdTouched] = useState(false);

  return (
    <FindPws id="find__pws">
      <FindAccountHeader />
      <form>
        <b>당신의 아이디를 입력해주세요.</b>
        <input
          type="text"
          value={id}
          onChange={(e) => {
            setId(e.target.value);
          }}
          onBlur={(e) => {
            setIdTouched(true);
          }}
        />
        <button type="button" disabled={!idTouched || id === ""}>
          비밀번호 재설정
        </button>
      </form>
    </FindPws>
  );
};

export default FindPassword;
